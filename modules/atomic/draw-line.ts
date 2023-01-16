
import { CanvasRenderingContext2D } from "canvas";
import { Dot, SceneConfig } from "../../types";
import getPixelsCoord from "./get-pixels-coord";

const drawLine = (ctx: CanvasRenderingContext2D, from: Dot, to: Dot, sceneConfig: SceneConfig) => {
    ctx.beginPath();
    const fromPixels = getPixelsCoord(from.x, from.y, sceneConfig);
    const toPixels = getPixelsCoord(to.x, to.y, sceneConfig);

    ctx.moveTo(fromPixels.x, fromPixels.y)
    ctx.lineTo(toPixels.x, toPixels.y);
    ctx.stroke()
}

export default drawLine;