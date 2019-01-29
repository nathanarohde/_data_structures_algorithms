// Iterate over an array
// Return longest series of n or (n + (n+1))
// Time Complexity O(n) Space complexity O(n)
function pickingNumbers(a) {
    let numbers = {};
    let longestSet = 0

    for (let i = 0; i < a.length; i++){
        numbers[a[i]] ? numbers[a[i]] += 1 : numbers[a[i]] = 1;
    }

    for (let number in numbers) {
        if (numbers[number] > longestSet) longestSet = numbers[number];
        if (numbers[(parseInt(number) + 1).toString()]) {
            if ((numbers[(parseInt(number) + 1).toString()]) + numbers[number] > longestSet) {
                longestSet = (numbers[(parseInt(number) + 1).toString()]) + numbers[number];
            }
        }
    }
    return longestSet;
}
