import { max, min } from "ramda";
import { SceneConfig } from "types";

const calculateEdgesOfScene = (polygon: number[][]) => {
    const maxX = polygon.reduce((prev, row) => max(prev, row[0]), 0);
    const maxY = polygon.reduce((prev, row) => max(prev, row[1]), 0);

    const minX = polygon.reduce((prev, row) => min(prev, row[0]), 0);
    const minY = polygon.reduce((prev, row) => min(prev, row[1]), 0);

    return {
        maxX, maxY, minX, minY
    }
}

const calculateSceneConfig = (polygon: number[][]): SceneConfig => {
    const newEdges = calculateEdgesOfScene(polygon);
}