"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";

/* Lathe profile of a squat smoothie bottle, in world units (bottle ≈ 3 tall) */
const PROFILE: [number, number][] = [
  [0.0, 0.02],
  [0.55, 0.02],
  [0.74, 0.08],
  [0.8, 0.28],
  [0.82, 0.7],
  [0.82, 1.75],
  [0.79, 1.95],
  [0.66, 2.14],
  [0.48, 2.28],
  [0.36, 2.38],
  [0.33, 2.48],
  [0.33, 2.58],
];

function useLabelTexture() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let cancelled = false;
    const draw = () => {
      if (cancelled) return;
      const canvas = document.createElement("canvas");
      canvas.width = 2048;
      canvas.height = 640;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#c33764";
      ctx.fillRect(0, 0, 2048, 640);
      // cream trim lines top + bottom
      ctx.fillStyle = "#fdf6e8";
      ctx.fillRect(0, 26, 2048, 7);
      ctx.fillRect(0, 607, 2048, 7);
      // two label faces so one is always camera-front
      for (const cx of [512, 1536]) {
        ctx.fillStyle = "#fdf6e8";
        ctx.textAlign = "center";
        ctx.font =
          "900 190px Fraunces, 'Fraunces Fallback', Georgia, serif";
        ctx.fillText("zyka", cx, 350);
        ctx.font = "700 52px Archivo, sans-serif";
        const sub = "M A N G O  ·  2 0 G";
        ctx.fillText(sub, cx, 460);
        // sun mark above wordmark
        ctx.save();
        ctx.translate(cx, 120);
        ctx.beginPath();
        ctx.arc(0, 0, 16, 0, Math.PI * 2);
        ctx.fill();
        for (let i = 0; i < 8; i++) {
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-3.5, -46, 7, 20);
        }
        ctx.restore();
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      setTexture(tex);
    };
    // draw once fonts are ready so the wordmark uses real Fraunces
    document.fonts.load("900 190px Fraunces").then(draw, draw);
    return () => {
      cancelled = true;
    };
  }, []);

  return texture;
}

function Bottle({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const label = useLabelTexture();

  const bottleGeo = useMemo(() => {
    const pts = PROFILE.map(([x, y]) => new THREE.Vector2(x, y));
    return new THREE.LatheGeometry(pts, 96);
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    const spin = reducedMotion ? 0 : Math.sin(t * 0.25) * 0.55;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      spin + pointer.x * 0.45,
      0.06
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * 0.12,
      0.06
    );
  });

  return (
    <group ref={group} position={[0, -1.45, 0]}>
      {/* body — opaque mango lassi seen through glossy plastic */}
      <mesh geometry={bottleGeo} castShadow>
        <meshPhysicalMaterial
          color="#f2b64b"
          roughness={0.24}
          clearcoat={1}
          clearcoatRoughness={0.12}
          sheen={0.4}
          sheenColor="#ffdf9e"
        />
      </mesh>
      {/* shrink-sleeve label */}
      {label && (
        <mesh position={[0, 1.02, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.845, 0.845, 1.18, 96, 1, true]} />
          <meshPhysicalMaterial
            map={label}
            roughness={0.32}
            clearcoat={0.6}
            clearcoatRoughness={0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
      {/* neck ring */}
      <mesh position={[0, 2.6, 0]}>
        <cylinderGeometry args={[0.36, 0.36, 0.06, 64]} />
        <meshStandardMaterial color="#f3e2bd" roughness={0.5} />
      </mesh>
      {/* cap */}
      <mesh position={[0, 2.82, 0]} castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.38, 64]} />
        <meshPhysicalMaterial
          color="#23644b"
          roughness={0.35}
          clearcoat={0.8}
          clearcoatRoughness={0.25}
        />
      </mesh>
      <mesh position={[0, 3.01, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.02, 64]} />
        <meshStandardMaterial color="#1b503b" roughness={0.4} />
      </mesh>
    </group>
  );
}

export default function Bottle3D({ className = "" }: { className?: string }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className={className} role="img" aria-label="Zyka mango lassi bottle">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0.5, 6.4], fov: 30 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* studio-style three-point lighting — no external HDR fetch */}
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 4]} intensity={1.6} castShadow />
        <directionalLight
          position={[-5, 3, -2]}
          intensity={0.7}
          color="#ffe0b0"
        />
        <directionalLight position={[0, 2, -6]} intensity={0.9} color="#fff3dd" />
        <pointLight position={[0, 4, 3]} intensity={6} color="#fff8ec" />
        <Float
          speed={reducedMotion ? 0 : 1.6}
          rotationIntensity={0}
          floatIntensity={reducedMotion ? 0 : 0.55}
        >
          <Bottle reducedMotion={reducedMotion} />
        </Float>
        <ContactShadows
          position={[0, -1.62, 0]}
          opacity={0.38}
          scale={6}
          blur={2.6}
          far={2.4}
          color="#5c3d12"
        />
      </Canvas>
    </div>
  );
}
