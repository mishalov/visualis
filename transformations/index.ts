
const transformations2dFolder = __dirname + '/2d/';

export const transformations2d = {
    'reflection': transformations2dFolder + 'reflection.json',
    'rotation': transformations2dFolder + 'rotation.json'
}

export type Transformation = keyof typeof transformations2d