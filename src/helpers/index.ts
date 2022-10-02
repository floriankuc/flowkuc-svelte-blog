
export const arrayToString = (arr: string[]): string =>
	arr.reduce((p, c, i, src) => {
		if (i === src.length - 1) return p + ' and ' + c;
		else if (i === 0) return c;
		else return p + ', ' + c;
	}, '');



export function flyer(delay: number) {
		return {
			x: -10,
			delay
		}
	}
