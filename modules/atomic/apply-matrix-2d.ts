const applyMatrix2d = (dot: number[], matrix: number[][]) => {
    if (dot.length !== 2) throw new Error('Dot must contain only X and Y');
    if (matrix.length !== 3) throw new Error("Matrix must be 3x3");
    matrix.forEach(row => { if (row.length !== 3) throw new Error("Matrix must be 3x3") })

    const newX = matrix.reduce((prev, curr) => prev + dot[0] * curr[0], 0)
    const newY = matrix.reduce((prev, curr) => prev + dot[1] * curr[1], 0)

    return [newX, newY]
}


export default applyMatrix2d;