import { TransformationInput } from "types";
import calculateExpression from "./atomic/calculate-expression";

const applyMatrix2d = (polygon: number[][], { matrix, params }: TransformationInput) => polygon.map((dot) => {

    const newX = dot.reduce((prev, curr, index) => prev + curr * calculateExpression(matrix[index][0], params), 0)
    const newY = dot.reduce((prev, curr, index) => prev + curr * calculateExpression(matrix[index][1], params), 0)

    return [newX, newY]
})


export default applyMatrix2d;