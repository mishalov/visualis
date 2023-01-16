export interface Dot {
    x: number;
    y: number;
}

export interface SceneConfig {
    // Canvas Length
    width: number;
    // Canvas Height
    height: number;
    // Pixels for one unit on the scene
    stepX: number;
    // Pixels for one unit on the scene
    stepY: number;
    absoluteMinX: number;
    absoluteMinY: number;
    absoluteMaxX: number;
    absoluteMaxY: number;
    // absoluteMaxX - absoluteMinX
    xLength: number;
    // absoluteMaxY - absoluteMinY
    yLength: number;
}

export interface ArgumentMapper {
    name: string,
    description: string;
}

export interface TransformationInput {
    params: Record<string, number>
    matrix: number[][]
}