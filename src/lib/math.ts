export type Vector = number[];

/**
 * Result of multiplying components of vec by scalar.
 * @param vec - the vector to scale
 * @param scalar - the scale factor
 */
export function scale(vec: Vector, scalar: number): Vector {
	return vec.map(elem => elem * scalar);
}

/**
 * Euclidean distance between vec1 and vec2.
 * @param vec1 - the first vector
 * @param vec2 - the second vector
 *
 * @throws Error - if vectors have different sizes
 */
export function distance(vec1: Vector, vec2: Vector): number {
	if (vec1.length !== vec2.length)
		throw new Error('Vectors have different sizes');

	return Math.sqrt(
		vec1.reduce((acc, elem, index) => acc + (elem - vec2[index]) ** 2, 0)
	);
}
