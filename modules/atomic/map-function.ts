const funcs = {
    'sin': Math.sin,
    'cos': Math.cos
}


const mapFunction = (expression: string, params: Record<string, number>) => {
    if (!expression) return a => a;

    const sign = expression[0] === '-';
    let shift = 0;
    if (sign) {
        shift += 1;
    }

    const firstParen = expression.indexOf('(');
    const lastParen = expression.lastIndexOf(')');

    if (firstParen === -1) {
        return params[expression] * (sign ? -1 : 1)
    }

    const literal = expression.substring(shift, firstParen);



    const arg = expression.substring(firstParen + 1, lastParen);

    return (a) => funcs[funcName](arg);
}