import { Transformation } from "../transformations";
import * as fs from "fs"
import applyMatrix2d from "./apply-matrix-2d";
import loadJSON from "../utils/load-json";
import { TransformationInput } from "../types";

const transformationsRoot = './transformations/2d';

const applyTransformation = (polygon: number[][], transformation: Transformation) => {
    const names = fs.readdirSync(transformationsRoot).map(name => name.substring(0, name.indexOf('.')));
    const transformations = names.reduce((acc, name) => ({ ...acc, [name]: loadJSON(`${transformationsRoot}/${name}.json`) as TransformationInput }), {} as Record<string, TransformationInput>)

    return applyMatrix2d(polygon, transformations[transformation])
}

export default applyTransformation;