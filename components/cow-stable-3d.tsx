"use client"

import { Suspense, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Html,
} from "@react-three/drei"
import * as THREE from "three"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RotateCw, ZoomIn, ZoomOut, Home } from "lucide-react"

import { Instances, Kandang } from "@/components/kandang"

/* ================= LOADING ================= */

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-yellow-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-yellow-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="text-sm font-medium text-gray-700">Memuat Model 3D...</p>
      </div>
    </Html>
  )
}

/* ================= HOTSPOT ================= */

interface HotspotData {
  label: string
  description: string
  color: string
  position: [number, number, number]
}

function AnnotationMarker({
  position,
  color,
  label,
  onClick,
}: {
  position: [number, number, number]
  color: string
  label: string
  onClick: () => void
}) {
  return (
    <group position={position}>
      <Html center distanceFactor={3}>
        <div
          onClick={(e) => {
            e.stopPropagation()
            onClick()
          }}
          className="cursor-pointer select-none"
        >
          <div
            className="w-4 h-4 rounded-full border-2 border-white shadow-lg animate-pulse"
            style={{ backgroundColor: color }}
          />
          <div className="mt-1 text-[10px] bg-white/90 px-1 rounded text-center">
            {label}
          </div>
        </div>
      </Html>
    </group>
  )
}


/* ================= MAIN ================= */

export function CowStable3D() {
  const controlsRef = useRef<any>(null)
  const [selected, setSelected] = useState<HotspotData | null>(null)

  const hotspots: HotspotData[] = [
    {
      label: "Tempat Pakan",
      description: "Area pemberian pakan otomatis",
      color: "#3b82f6",
      position: [0, -0.8, 1.3],
    },
    {
      label: "Atap",
      description: "Atap pelindung dari panas dan hujan",
      color: "#f59e0b",
      position: [0, 0.4, 0],
    },
    {
      label: "Drainase",
      description: "Sistem pembuangan air modern",
      color: "#8b5cf6",
      position: [0, -0.8, -0.5],
    },
  ]

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden border bg-gradient-to-b from-sky-200 to-slate-50">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[7, 1, 5]} />

        {/* LIGHTING (ANIME STYLE) */}
        <ambientLight intensity={0.35} />
        <directionalLight position={[-1, 10, 5]} intensity={1.3} castShadow />

        <Environment preset="night" />

        <Suspense fallback={<Loader />}>
          <group scale={0.0002} position={[0, -1, 0]}>
            <Instances>
              <Kandang />
              <Kandang />
            </Instances>
          </group>
        </Suspense>

        {/* HOTSPOTS */}
        {hotspots.map((h, i) => (
          <AnnotationMarker
            key={i}
            position={h.position}
            color={h.color}
            label={h.label}
            onClick={() => setSelected(h)}
          />
        ))}

        {/* GROUND */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#7cb342" metalness={0.1} roughness={0.9} />
        </mesh>

        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.08}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* UI CONTROLS */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <Button size="sm" onClick={() => controlsRef.current?.reset()}>
          <Home size={16} />
        </Button>
        <Button
          size="sm"
          onClick={() =>
            controlsRef.current?.object.position.multiplyScalar(0.8)
          }
        >
          <ZoomIn size={16} />
        </Button>
        <Button
          size="sm"
          onClick={() =>
            controlsRef.current?.object.position.multiplyScalar(1.2)
          }
        >
          <ZoomOut size={16} />
        </Button>
        <Button
          size="sm"
          onClick={() =>
            controlsRef.current?.setAzimuthalAngle(
              controlsRef.current.getAzimuthalAngle() + Math.PI / 4
            )
          }
        >
          <RotateCw size={16} />
        </Button>
      </div>

      {/* HOTSPOT INFO */}
      {selected && (
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-lg p-4 shadow-xl">
          <Badge style={{ backgroundColor: selected.color }}>
            {selected.label}
          </Badge>
          <p className="text-sm mt-2">{selected.description}</p>
        </div>
      )}
    </div>
  )
}
