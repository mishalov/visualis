const binaryFuncs = {
    'mult': (a: number, b: number) => a * b,
}

const unaryFuncs = {
    'sin': Math.sin,
    'cos': Math.cos,
}

type AvailableBinaryFuncs = keyof typeof binaryFuncs
type AvailableUnaryFuncs = keyof typeof unaryFuncs

const calculateExpression = (expression: string | number, params: Record<string, number>): number => {
    const exprToNumber = +expression;
    if (!Number.isNaN(+expression)) return exprToNumber;
    if (params[expression]) return params[expression];

    // Typecasting
    const strExpr = `${expression}`

    const sign = strExpr[0] === '-';
    let shift = 0;
    if (sign) {
        shift += 1;
    }

    const firstParen = strExpr.indexOf('(');
    const lastParen = strExpr.lastIndexOf(')');

    const desiredFunc = strExpr.substring(shift, firstParen);

    const isFunctionUnary = !strExpr.includes(',');

    // Calculating unary functions
    if (isFunctionUnary) {
        const desiredArg = calculateExpression(strExpr.substring(firstParen + 1, lastParen), params)
        return unaryFuncs[desiredFunc as AvailableUnaryFuncs](desiredArg) * (sign ? -1 : 1)
    }

    // Calculating binary functions
    const desiredArgs = strExpr.substring(firstParen + 1, lastParen).split(',').map(el => calculateExpression(el.trim(), params)).splice(0, 2) as [number, number];
    return binaryFuncs[desiredFunc as AvailableBinaryFuncs].apply(null, desiredArgs) * (sign ? -1 : 1)
}

export default calculateExpression;