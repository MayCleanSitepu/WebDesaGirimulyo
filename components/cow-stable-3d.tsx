"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RotateCw, ZoomIn, ZoomOut, Maximize2, Home } from "lucide-react"

interface HotspotData {
  x: number
  y: number
  label: string
  description: string
  color: string
}

export function CowStable3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rotation, setRotation] = useState({ x: 0.3, y: 0.5 })
  const [zoom, setZoom] = useState(1)
  const [isDragging, setIsDragging] = useState(false)
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 })
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotData | null>(null)
  const animationFrameRef = useRef<number>()

  const hotspots: HotspotData[] = [
    { x: 0.3, y: 0.4, label: "Tempat Pakan", description: "Area pemberian pakan dengan sistem otomatis", color: "#3b82f6" },
    { x: 0.7, y: 0.4, label: "Sistem Minum", description: "Sistem air minum otomatis untuk sapi", color: "#10b981" },
    { x: 0.5, y: 0.2, label: "Atap", description: "Atap pelindung dari panas dan hujan", color: "#f59e0b" },
    { x: 0.5, y: 0.7, label: "Drainase", description: "Sistem drainase modern terintegrasi", color: "#8b5cf6" },
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const render = () => {
      // Set canvas size
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

      const width = rect.width
      const height = rect.height
      const centerX = width / 2
      const centerY = height / 2

      // Clear canvas
      ctx.fillStyle = "#f8fafc"
      ctx.fillRect(0, 0, width, height)

      // Apply transformations
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.scale(zoom, zoom)
      ctx.translate(-centerX, -centerY)

      // 3D transformation helpers
      const rotX = rotation.x
      const rotY = rotation.y

      const project3D = (x: number, y: number, z: number) => {
        // Simple 3D to 2D projection
        const scale = 200 * zoom
        const cosX = Math.cos(rotX)
        const sinX = Math.sin(rotX)
        const cosY = Math.cos(rotY)
        const sinY = Math.sin(rotY)

        // Rotate around Y axis
        const x1 = x * cosY - z * sinY
        const z1 = x * sinY + z * cosY

        // Rotate around X axis
        const y1 = y * cosX - z1 * sinX
        const z2 = y * sinX + z1 * cosX

        // Perspective projection
        const perspective = 5 / (5 + z2)
        
        return {
          x: centerX + x1 * scale * perspective,
          y: centerY - y1 * scale * perspective,
          z: z2,
        }
      }

      // Draw ground
      ctx.fillStyle = "#86efac"
      ctx.fillRect(0, height * 0.7, width, height * 0.3)

      // Define stable structure
      const stableWidth = 2
      const stableHeight = 1.2
      const stableDepth = 1.5

      // Stable base corners
      const corners = [
        { x: -stableWidth / 2, y: 0, z: -stableDepth / 2 },
        { x: stableWidth / 2, y: 0, z: -stableDepth / 2 },
        { x: stableWidth / 2, y: 0, z: stableDepth / 2 },
        { x: -stableWidth / 2, y: 0, z: stableDepth / 2 },
        { x: -stableWidth / 2, y: -stableHeight, z: -stableDepth / 2 },
        { x: stableWidth / 2, y: -stableHeight, z: -stableDepth / 2 },
        { x: stableWidth / 2, y: -stableHeight, z: stableDepth / 2 },
        { x: -stableWidth / 2, y: -stableHeight, z: stableDepth / 2 },
      ]

      const projected = corners.map((c) => project3D(c.x, c.y, c.z))

      // Draw floor
      ctx.fillStyle = "#92400e"
      ctx.strokeStyle = "#78350f"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(projected[0].x, projected[0].y)
      ctx.lineTo(projected[1].x, projected[1].y)
      ctx.lineTo(projected[2].x, projected[2].y)
      ctx.lineTo(projected[3].x, projected[3].y)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Draw walls
      // Back wall
      ctx.fillStyle = "#b45309"
      ctx.strokeStyle = "#78350f"
      ctx.beginPath()
      ctx.moveTo(projected[0].x, projected[0].y)
      ctx.lineTo(projected[1].x, projected[1].y)
      ctx.lineTo(projected[5].x, projected[5].y)
      ctx.lineTo(projected[4].x, projected[4].y)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Right wall
      ctx.fillStyle = "#d97706"
      ctx.beginPath()
      ctx.moveTo(projected[1].x, projected[1].y)
      ctx.lineTo(projected[2].x, projected[2].y)
      ctx.lineTo(projected[6].x, projected[6].y)
      ctx.lineTo(projected[5].x, projected[5].y)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Left wall
      ctx.fillStyle = "#d97706"
      ctx.beginPath()
      ctx.moveTo(projected[0].x, projected[0].y)
      ctx.lineTo(projected[3].x, projected[3].y)
      ctx.lineTo(projected[7].x, projected[7].y)
      ctx.lineTo(projected[4].x, projected[4].y)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Draw roof
      const roofPeak = project3D(0, -stableHeight - 0.5, 0)
      
      // Roof front face
      ctx.fillStyle = "#dc2626"
      ctx.strokeStyle = "#991b1b"
      ctx.beginPath()
      ctx.moveTo(projected[4].x, projected[4].y)
      ctx.lineTo(roofPeak.x, roofPeak.y)
      ctx.lineTo(projected[7].x, projected[7].y)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Roof back face
      ctx.fillStyle = "#b91c1c"
      ctx.beginPath()
      ctx.moveTo(projected[5].x, projected[5].y)
      ctx.lineTo(roofPeak.x, roofPeak.y)
      ctx.lineTo(projected[4].x, projected[4].y)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Roof right face
      ctx.fillStyle = "#dc2626"
      ctx.beginPath()
      ctx.moveTo(projected[5].x, projected[5].y)
      ctx.lineTo(roofPeak.x, roofPeak.y)
      ctx.lineTo(projected[6].x, projected[6].y)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Roof left face
      ctx.fillStyle = "#ef4444"
      ctx.beginPath()
      ctx.moveTo(projected[7].x, projected[7].y)
      ctx.lineTo(roofPeak.x, roofPeak.y)
      ctx.lineTo(projected[6].x, projected[6].y)
      ctx.closePath()
      ctx.fill()
      ctx.stroke()

      // Draw fence/dividers
      for (let i = 0; i < 3; i++) {
        const x = -stableWidth / 2 + (i + 1) * (stableWidth / 4)
        const p1 = project3D(x, 0, stableDepth / 2)
        const p2 = project3D(x, -0.6, stableDepth / 2)
        
        ctx.strokeStyle = "#422006"
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.stroke()
      }

      // Draw feed troughs
      const feedPos = project3D(-stableWidth / 3, -0.3, stableDepth / 2)
      ctx.fillStyle = "#fbbf24"
      ctx.fillRect(feedPos.x - 25, feedPos.y - 10, 50, 20)
      ctx.strokeStyle = "#f59e0b"
      ctx.lineWidth = 2
      ctx.strokeRect(feedPos.x - 25, feedPos.y - 10, 50, 20)

      // Draw water system
      const waterPos = project3D(stableWidth / 3, -0.3, stableDepth / 2)
      ctx.fillStyle = "#60a5fa"
      ctx.beginPath()
      ctx.arc(waterPos.x, waterPos.y, 15, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = "#3b82f6"
      ctx.lineWidth = 2
      ctx.stroke()

      // Draw cows (simple representation)
      const drawCow = (x: number, y: number, z: number) => {
        const pos = project3D(x, y, z)
        
        // Body
        ctx.fillStyle = "#78350f"
        ctx.beginPath()
        ctx.ellipse(pos.x, pos.y, 20, 15, 0, 0, Math.PI * 2)
        ctx.fill()
        
        // Head
        ctx.beginPath()
        ctx.ellipse(pos.x + 15, pos.y - 5, 10, 8, 0, 0, Math.PI * 2)
        ctx.fill()

        // Spots
        ctx.fillStyle = "#292524"
        ctx.beginPath()
        ctx.arc(pos.x - 5, pos.y - 3, 4, 0, Math.PI * 2)
        ctx.arc(pos.x + 5, pos.y + 3, 5, 0, Math.PI * 2)
        ctx.fill()
      }

      drawCow(-0.6, -0.3, 0)
      drawCow(0, -0.3, -0.3)
      drawCow(0.6, -0.3, 0.2)

      ctx.restore()

      // Draw hotspots
      hotspots.forEach((hotspot) => {
        const x = width * hotspot.x
        const y = height * hotspot.y

        // Hotspot marker
        ctx.fillStyle = hotspot.color
        ctx.shadowColor = hotspot.color
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Pulse effect
        ctx.strokeStyle = hotspot.color
        ctx.lineWidth = 2
        ctx.globalAlpha = 0.5
        ctx.beginPath()
        ctx.arc(x, y, 12 + Math.sin(Date.now() / 500) * 3, 0, Math.PI * 2)
        ctx.stroke()
        ctx.globalAlpha = 1

        // Label
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 12px sans-serif"
        const textWidth = ctx.measureText(hotspot.label).width
        ctx.fillStyle = hotspot.color
        ctx.fillRect(x + 15, y - 10, textWidth + 10, 20)
        ctx.fillStyle = "#ffffff"
        ctx.fillText(hotspot.label, x + 20, y + 4)
      })

      // Draw title
      ctx.fillStyle = "#1e293b"
      ctx.font = "bold 14px sans-serif"
      ctx.fillText("Kandang Sapi 3D", 20, 30)
      ctx.font = "12px sans-serif"
      ctx.fillStyle = "#64748b"
      ctx.fillText("Klik dan drag untuk memutar | Scroll untuk zoom", 20, 50)
    }

    render()
    animationFrameRef.current = requestAnimationFrame(function animate() {
      render()
      animationFrameRef.current = requestAnimationFrame(animate)
    })

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [rotation, zoom])

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true)
    setLastMousePos({ x: e.clientX, y: e.clientY })

    // Check hotspot clicks
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    hotspots.forEach((hotspot) => {
      const distance = Math.sqrt(
        Math.pow(x - hotspot.x, 2) + Math.pow(y - hotspot.y, 2)
      )
      if (distance < 0.05) {
        setSelectedHotspot(hotspot)
      }
    })
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return

    const deltaX = e.clientX - lastMousePos.x
    const deltaY = e.clientY - lastMousePos.y

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.01,
      y: prev.y + deltaX * 0.01,
    }))

    setLastMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    setZoom((prev) => Math.max(0.5, Math.min(2, prev * delta)))
  }

  const resetView = () => {
    setRotation({ x: 0.3, y: 0.5 })
    setZoom(1)
  }

  return (
    <div className="space-y-4">
      <div className="relative bg-slate-50 rounded-lg overflow-hidden border-2 border-slate-200">
        <canvas
          ref={canvasRef}
          className="w-full h-[500px] cursor-move"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onWheel={handleWheel}
        />

        {/* Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={resetView}
            className="shadow-lg"
          >
            <Home className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setZoom((prev) => Math.min(2, prev * 1.2))}
            className="shadow-lg"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setZoom((prev) => Math.max(0.5, prev * 0.8))}
            className="shadow-lg"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setRotation((prev) => ({ ...prev, y: prev.y + 0.2 }))}
            className="shadow-lg"
          >
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>

        {/* Hotspot details */}
        {selectedHotspot && (
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-lg p-4 shadow-xl border">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Badge style={{ backgroundColor: selectedHotspot.color }} className="mb-2">
                  {selectedHotspot.label}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {selectedHotspot.description}
                </p>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSelectedHotspot(null)}
              >
                ✕
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2">
        {hotspots.map((hotspot, index) => (
          <Badge
            key={index}
            variant="outline"
            className="cursor-pointer hover:bg-accent"
            style={{ borderColor: hotspot.color }}
            onClick={() => setSelectedHotspot(hotspot)}
          >
            <div
              className="w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: hotspot.color }}
            />
            {hotspot.label}
          </Badge>
        ))}
      </div>
    </div>
  )
}
