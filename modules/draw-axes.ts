import { CanvasRenderingContext2D } from "canvas";
import { SceneConfig } from "../types";
import drawLine from "./atomic/draw-line";

const drawAxes = (ctx: CanvasRenderingContext2D, sceneConfig: SceneConfig) => {
    const { yLength, xLength, absoluteMinX, absoluteMinY } = sceneConfig;

    drawLine(ctx, { x: absoluteMinX, y: 0 }, { x: xLength, y: 0 }, sceneConfig);
    drawLine(ctx, { x: 0, y: absoluteMinY }, { x: 0, y: yLength }, sceneConfig);
}

export default drawAxes;