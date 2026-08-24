"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

export type WorldKind = "hero" | "members" | "gallery" | "works";

const theme = {
  hero: { primary: "#d8b665", secondary: "#eff0de", glow: "#133971" },
  members: { primary: "#d7af5b", secondary: "#7599c4", glow: "#132e54" },
  gallery: { primary: "#e9dec8", secondary: "#74a9c9", glow: "#153f76" },
  works: { primary: "#0c315e", secondary: "#d9ad55", glow: "#eee1c6" },
};

function FloatingField({ kind }: { kind: WorldKind }) {
  const group = useRef<THREE.Group>(null);
  const palette = theme[kind];
  const pieces = useMemo(
    () => Array.from({ length: kind === "hero" ? 34 : 19 }, (_, index) => ({
      position: [Math.sin(index * 3.1) * (1.4 + (index % 4) * 0.42), Math.cos(index * 1.7) * (0.8 + (index % 5) * 0.26), (index % 6) - 3] as [number, number, number],
      scale: 0.025 + (index % 5) * 0.012,
      phase: index * 0.67,
    })),
    [kind],
  );

  useFrame((state, delta) => {
    if (!group.current) return;
    const targetX = state.pointer.y * 0.18;
    const targetY = state.pointer.x * 0.22;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 2.4, delta);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 2.4, delta);
  });

  return (
    <group ref={group}>
      {pieces.map((piece, index) => (
        <mesh key={index} position={piece.position} scale={piece.scale * 20} rotation={[piece.phase, piece.phase * 0.4, 0]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={index % 3 === 0 ? palette.primary : palette.secondary} emissive={palette.glow} emissiveIntensity={0.42} roughness={0.38} metalness={0.58} />
        </mesh>
      ))}
    </group>
  );
}

function KineticObject({ kind }: { kind: WorldKind }) {
  const ref = useRef<THREE.Group>(null);
  const palette = theme[kind];

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.23;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.14;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.65) * 0.12;
  });

  return (
    <group ref={ref} position={[1.5, -0.15, -1.25]}>
      <mesh rotation={[0.72, 0.25, 0]}>
        <torusKnotGeometry args={[0.68, 0.11, 140, 18]} />
        <meshStandardMaterial color={palette.primary} emissive={palette.primary} emissiveIntensity={0.32} metalness={0.78} roughness={0.2} />
      </mesh>
      <mesh scale={1.42} rotation={[0.55, 0.15, 0.1]}>
        <torusGeometry args={[0.86, 0.012, 8, 88]} />
        <meshBasicMaterial color={palette.secondary} transparent opacity={0.56} />
      </mesh>
      <mesh scale={1.86} rotation={[-0.8, 0.22, 1.1]}>
        <torusGeometry args={[0.86, 0.009, 8, 88]} />
        <meshBasicMaterial color={palette.primary} transparent opacity={0.42} />
      </mesh>
    </group>
  );
}

export default function ThreeWorld({ kind }: { kind: WorldKind }) {
  const palette = theme[kind];
  return (
    <Canvas dpr={[1, 1.25]} gl={{ alpha: true, antialias: true, powerPreference: "low-power" }} camera={{ position: [0, 0, 5.4], fov: 48 }}>
      <color attach="background" args={["#071a38"]} />
      <fog attach="fog" args={["#071a38", 4, 11]} />
      <ambientLight intensity={0.68} color={palette.secondary} />
      <pointLight position={[2.5, 2.3, 3.8]} intensity={16} color={palette.primary} distance={9} />
      <pointLight position={[-2.8, -1.8, 2]} intensity={8} color={palette.glow} distance={8} />
      <FloatingField kind={kind} />
      <KineticObject kind={kind} />
    </Canvas>
  );
}
