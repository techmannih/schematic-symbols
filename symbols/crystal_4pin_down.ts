import crystal_4pin_right from "./crystal_4pin_right"
import { modifySymbol } from "drawing/modify-symbol/modify-symbol"

export default modifySymbol(crystal_4pin_right)
  .rotateRightFacingSymbol("down")
  .changeTextAnchor("{REF}", "bottom_left")
  .changeTextAnchor("{VAL}", "top_right")
  .build()
