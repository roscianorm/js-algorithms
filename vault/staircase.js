function staircase(n) {
	let staircase = ``
	for (let i = n; i > 0; i--) {
		let m = n - i
		for (let j = 0; j < i - 1; j++) {
			staircase += ' '
		}
		for (let k = 0; k <= m; k++) {
			staircase += '#'
		}
		i - 1 === 0 ? null : (staircase += '\n')
	}
	return staircase
}

console.log(staircase(5))
