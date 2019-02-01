// Tally every time a 2D array drops below a point.
function countingValleys(n, s) {
    let level = 0;
    let vallies = 0;
    for (let i = 0; i < s.length; i++){
        if (level === 0 && s[i] === 'D') {
            vallies++;
            level--;
            continue;
        }
        (s[i] === 'U') ? level++ : level--;

    }
    return vallies;

}
