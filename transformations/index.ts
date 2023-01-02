
const transformations2dFolder = __dirname + '/2d/';

export const transformations2d = {
    'reflection': transformations2dFolder + 'reflection.json'
}

export type Transformation = keyof typeof transformations2d