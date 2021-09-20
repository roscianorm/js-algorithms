function diagonalDifference(arr) {
	let aDiagonalDiff = 0
	let bDiagonalDiff = 0
	let total = 0
	for (let i = 0; i < arr.length; i++) {
		aDiagonalDiff += arr[i][i]
		bDiagonalDiff += arr[arr.length - (i ? i + 1 : i + 1)][i]
	}
	total = aDiagonalDiff - bDiagonalDiff
	return total < 0 ? total * -1 : total
}

let a = [
	[11, 4, 10],
	[2, 5, 8],
	[4, 6, -12],
]
diagonalDifference(a)
