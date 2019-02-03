function findDigits(n) {
    let number = Math.abs(n);
    let map = {};
    let tally = 0;
    while (number > 0) {
        map[number % 10] ? map[number % 10] += 1 : map[number % 10] = 1;
        number = (number - (number % 10)) / 10;
    }

    for (let number in map) {
        if (n % number === 0) {
            tally += map[number];
        }
    }

    return tally;
}
