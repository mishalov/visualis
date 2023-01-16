import { Canvas, CanvasRenderingContext2D, createCanvas } from "canvas";
import * as fs from "fs"
import calculateSingleStepPixels from "./modules/atomic/calculate-step-pixels";
import renderScales from "./modules/render-scales";
import drawAxes from "./modules/draw-axes";

import drawPolygon from "./modules/draw-polygon";
import loadJSON from "./utils/load-json";
import applyTransformation from "./modules/apply-transformation";
import calculateSceneConfig from "./modules/calculate-scene-config";
import { SceneConfig } from "types";


const newCanvas = (width: number, height: number): [Canvas, CanvasRenderingContext2D] => {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    context.font = "bold 11px serif";
    context.fillStyle = "#fff";
    context.fillRect(0, 0, width, height)
    context.fillStyle = "#000";
    return [canvas, context];
}

const initialCanvasPreparation = (context: CanvasRenderingContext2D, sceneConfig: SceneConfig) => {
    drawAxes(context, sceneConfig)
    renderScales(context, sceneConfig)
}

const polygon = loadJSON('./tests/square/coords.json');

const transformed = applyTransformation(polygon, "rotation");

const sceneConfig = calculateSceneConfig(transformed);
const [canvas, context] = newCanvas(sceneConfig.width, sceneConfig.height)
initialCanvasPreparation(context, sceneConfig);
drawPolygon(context, transformed, sceneConfig)

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("./image.png", buffer);
