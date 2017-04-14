var sumCoolNumbers = 0;

function getCoolNumbers(num) {
	var result = 0;
	num.toString().split('') // get an array from the parameter
		.forEach(function (i) {
			result += (+i * i)  // Assign to the variable result the square of each element of the array
		});
	return result;
}


for (j = 1; j < 1000001; j++) {
	var coolNumber = getCoolNumbers(j);  // call function and find cool number
	var i = 0;
	while (coolNumber != 4) {
		if (coolNumber == 1) {
			sumCoolNumbers += j;
			break;

		} else {
			coolNumber = getCoolNumbers(coolNumber)
			i++
		}

	}

}
console.log(sumCoolNumbers);