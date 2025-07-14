import crystal_4pin_right from "./crystal_4pin_right"
import { modifySymbol } from "drawing/modify-symbol/modify-symbol"

export default modifySymbol(crystal_4pin_right)
  .rotateRightFacingSymbol("up")
  .changeTextAnchor("{REF}", "top_right")
  .changeTextAnchor("{VAL}", "bottom_left")
  .build()
