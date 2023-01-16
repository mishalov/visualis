import { CanvasRenderingContext2D } from "canvas"
import { SceneConfig } from "../types";
import getPixelsCoord from "./atomic/get-pixels-coord";

const renderSingleScale = (ctx: CanvasRenderingContext2D, x: number, y: number, scale: string) => {
    ctx.fillText(scale, x + 3, y - 3);
}

const renderScaleStrokeHorizontal = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.beginPath();
    ctx.moveTo(x, y - 3);
    ctx.lineTo(x, y + 3);
    ctx.stroke();

}

const renderScaleStrokeVertical = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.beginPath();
    ctx.moveTo(x - 3, y);
    ctx.lineTo(x + 3, y);
    ctx.stroke();

}

const renderScales = (ctx: CanvasRenderingContext2D, sceneConfig: SceneConfig) => {
    const { absoluteMinX, absoluteMaxX, absoluteMaxY, absoluteMinY } = sceneConfig;
    const beginX = absoluteMinX < 0 ? Math.floor(absoluteMinX) : Math.ceil(absoluteMinX);
    const beginY = absoluteMaxY < 0 ? Math.floor(absoluteMaxY) : Math.ceil(absoluteMaxY);


    for (let index = beginX; index <= absoluteMaxX; index++) {
        const { x, y } = getPixelsCoord(index, 0, sceneConfig);
        renderSingleScale(ctx, x, y, index.toString());
        renderScaleStrokeHorizontal(ctx, x, y);
    }

    for (let index = beginY; index >= absoluteMinY; index--) {
        const { x, y } = getPixelsCoord(0, index, sceneConfig);
        renderSingleScale(ctx, x, y, index.toString());
        renderScaleStrokeVertical(ctx, x, y);
    }
}

export default renderScales;