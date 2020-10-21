const checkFizzBuzz = (number) => {
  	const is3divisble = number % 3 === 0;
  	const is5divisble = number % 5 === 0;
  
	switch (true) {
      case is3divisble && is5divisble:
        return 'FizzBuzz';
      case is3divisble:
        return 'Fizz';
      case is5divisble:
        return 'Buzz';
      default:
        return number
    }
}

for (let i = 1; i <= 100; i += 1) {
	console.log(checkFizzBuzz(i));
}