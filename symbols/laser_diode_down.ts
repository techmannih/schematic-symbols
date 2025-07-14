import { rotateSymbol } from "drawing/rotateSymbol"
import laser_diode_right from "./laser_diode_right"
import type { TextPrimitive } from "drawing"

const rotatedSymbol = rotateSymbol(laser_diode_right, "down")

const texts = rotatedSymbol.primitives.filter((p) => p.type === "text")

const ref = texts.find((t) => t.text === "{VAL}")! as TextPrimitive

ref.x = -0.52
ref.anchor = "middle_right"

export default rotatedSymbol
