const funcs = {
    'sin': Math.sin,
    'cos': Math.cos
}

const calculateExpression = (expression: string | number, params: Record<string, number>): number => {
    const exprToNumber = +expression;
    if (!Number.isNaN(+expression)) return exprToNumber;
    // Return radians. Program takes Degrees
    if (params[expression]) return params[expression] * (Math.PI / 180);

    // Typecasting
    const strExpr = `${expression}`

    const sign = strExpr[0] === '-';
    let shift = 0;
    if (sign) {
        shift += 1;
    }

    const firstParen = strExpr.indexOf('(');
    const lastParen = strExpr.lastIndexOf(')');

    const desiredFunc = strExpr.substring(shift, firstParen) as keyof typeof funcs;
    const desiredArg = calculateExpression(strExpr.substring(firstParen + 1, lastParen), params);

    return funcs[desiredFunc](desiredArg) * (sign ? -1 : 1);
}

export default calculateExpression;