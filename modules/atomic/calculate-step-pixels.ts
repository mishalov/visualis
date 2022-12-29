const calculateSingleStepPixels = (absoluteMax: number, absoluteMin: number, sizeInPixels: number) => sizeInPixels / (absoluteMax - absoluteMin);

export default calculateSingleStepPixels;