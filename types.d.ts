export interface Dot {
    x: number;
    y: number;
}

export interface SceneConfig {
    width: number;
    height: number;
    stepX: number;
    stepY: number;
    absoluteMinX: number;
    absoluteMinY: number;
    absoluteMaxX: number;
    absoluteMaxY: number;
    xLength: number;
    yLength: number;
}