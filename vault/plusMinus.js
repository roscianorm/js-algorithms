function plusMinus(arr) {
	let [positiveArr, negativeArr, zeroArr] = [[], [], []]

	arr.forEach((item) => {
		if (item > 0) {
			positiveArr.push(item)
		} else if (item === 0) {
			zeroArr.push(item)
		} else {
			negativeArr.push(item)
		}
	})

	let positiveFraction = positiveArr.length / arr.length
	let negativeFraction = negativeArr.length / arr.length
	let zeroFraction = zeroArr.length / arr.length

	let result = `${positiveFraction.toFixed(6)}
${negativeFraction.toFixed(6)}
${zeroFraction.toFixed(6)}`
	console.log(result)
}

let a = [-4, 3, -9, 0, 4, 1]
plusMinus(a)
