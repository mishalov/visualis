import * as fs from "fs";

/**
 * @param path 
 * @returns 
 */
const loadJSON = (path: string) => JSON.parse(fs.readFileSync(path).toString());

export default loadJSON;