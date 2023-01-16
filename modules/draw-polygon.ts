import { CanvasRenderingContext2D } from "canvas";
import { SceneConfig } from "../types";
import drawLine from "./atomic/draw-line";

const drawPolygon = (ctx: CanvasRenderingContext2D, points: number[][], sceneConfig: SceneConfig) => {
    ctx.lineWidth = 2;

    points.forEach((point, index) => {
        if (index + 1 === points.length) {
            drawLine(ctx, { x: point[0], y: point[1] }, { x: points[0][0], y: points[0][1] }, sceneConfig)
            return
        }
        drawLine(ctx, { x: point[0], y: point[1] }, { x: points[index + 1][0], y: points[index + 1][1] }, sceneConfig)
    })

    ctx.lineWidth = 1;

}

export default drawPolygon;