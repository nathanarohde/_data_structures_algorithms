// sliding sequence problem

function birthday(s, d, m) {
    let counter = 0;
    let total = 0;
// m - number
// d - sum
// s - array
// needs to be in sequence?

    for (let i = 0; i < m; i++){
        total += s[i];
    }
    if (total === d) counter++;

    for (let i = m; i < s.length; i++){
        total = total - s[i - m] + s[i]
        if (total === d) counter++;
    }
    return counter;
}
