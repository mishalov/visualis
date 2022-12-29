import { createCanvas } from "canvas";
import * as fs from "fs"
import calculateSingleStepPixels from "./modules/atomic/calculate-step-pixels";
import renderScales from "./modules/render-scales";
import drawAxes from "./modules/draw-axes";

import square from "./tests/square/coords.json";
import drawPolygon from "./modules/draw-polygon";
import loadJSON from "./utils/load-json";

const width = 500;
const height = 500;

const absoluteMinX = -3;
const absoluteMinY = -4;
const absoluteMaxX = 12;
const absoluteMaxY = 12;

const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

context.fillStyle = "#fff";
context.fillRect(0, 0, width, height)
context.fillStyle = "#000";

const stepX = calculateSingleStepPixels(absoluteMaxX, absoluteMinX, width)
const stepY = calculateSingleStepPixels(absoluteMaxY, absoluteMinY, height)

const xLength = absoluteMaxX - absoluteMinX;
const yLength = absoluteMaxY - absoluteMinY;

const sceneConfig = {
    width,
    height,
    stepX,
    stepY,
    absoluteMinX,
    absoluteMinY,
    absoluteMaxX,
    absoluteMaxY,
    xLength,
    yLength
}
context.font = "bold 11px serif";

drawAxes(context, sceneConfig)
renderScales(context, sceneConfig)

drawPolygon(context, loadJSON('./tests/square/coords.json'), sceneConfig)

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("./image.png", buffer);