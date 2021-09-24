const multiplier = {
    numbers: [4, 6, 3],
    multiply(amount) {
        return this.numbers.map((value) => value * amount);
    }

}

console.log(multiplier.multiply(3));