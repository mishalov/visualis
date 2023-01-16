import { Dot, SceneConfig } from "../../types";

const getPixelsCoord = (x: number, y: number, sceneConfig: SceneConfig): Dot => ({ x: Math.round(sceneConfig.stepX * (x - sceneConfig.absoluteMinX)), y: Math.round(sceneConfig.stepY * (sceneConfig.absoluteMaxY - y)) })

export default getPixelsCoord;