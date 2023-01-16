import { max, min } from "ramda";
import { SceneConfig } from "../types";
import calculateSingleStepPixels from "./atomic/calculate-step-pixels";

const calculateEdgesOfScene = (polygon: number[][]) => {
    const absoluteMaxX = polygon.reduce((prev, row) => max(prev, row[0]), 0) + 1;
    const absoluteMaxY = polygon.reduce((prev, row) => max(prev, row[1]), 0) + 1;

    const absoluteMinX = polygon.reduce((prev, row) => min(prev, row[0]), 0) - 1;
    const absoluteMinY = polygon.reduce((prev, row) => min(prev, row[1]), 0) - 1;

    return {
        absoluteMaxX, absoluteMaxY, absoluteMinX, absoluteMinY
    }
}

const calculateSceneConfig = (polygon: number[][]): SceneConfig => {
    const { absoluteMaxX, absoluteMinX, absoluteMaxY, absoluteMinY } = calculateEdgesOfScene(polygon);

    const width = 500;
    const height = 500;

    const stepX = calculateSingleStepPixels(absoluteMaxX, absoluteMinX, width)
    const stepY = calculateSingleStepPixels(absoluteMaxY, absoluteMinY, height)

    const xLength = absoluteMaxX - absoluteMinX;
    const yLength = absoluteMaxY - absoluteMinY;

    return {
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
}

export default calculateSceneConfig;