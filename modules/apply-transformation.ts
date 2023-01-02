import { Transformation } from "../transformations";
import * as fs from "fs"
import applyMatrix2d from "./atomic/apply-matrix-2d";
import loadJSON from "../utils/load-json";

const transformationsRoot = './transformations/2d';

const applyTransformation = (polygon: number[][], transformation: Transformation) => {
    const names = fs.readdirSync(transformationsRoot).map(name => name.substring(0, name.indexOf('.')));
    const transformations = names.reduce((acc, name) => ({ ...acc, [name]: loadJSON(`${transformationsRoot}/${name}.json`) }), {} as any)

    return applyMatrix2d(polygon, transformations[transformation])
}

export default applyTransformation;