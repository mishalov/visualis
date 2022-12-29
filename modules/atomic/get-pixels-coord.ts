import { Dot, SceneConfig } from "../../types";

const getPixelsCoord = (x: number, y: number, sceneConfig: SceneConfig): Dot => ({ x: sceneConfig.stepX * (x - sceneConfig.absoluteMinX), y: sceneConfig.stepY * (sceneConfig.absoluteMaxY - y) })

export default getPixelsCoord;