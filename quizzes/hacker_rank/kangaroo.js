'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    if (x1 === x2) return "YES"; // Same location
    if (v1 === v2) return "NO"; // Same speed
    if ((v1 > 0 && v2 < 0) || (v2 > 0 && v1 < 0)) return "NO"; // Different start, different direction
    if (((v1 > v2) && (x1 > x2)) || ((v1 < v2) && (x1 < x2))) return "NO"; //One outpaces the other
    if (
        (v1 === 0) &&
        (
            (((x2 > 0) && (v2 > 0)) && (v1 < v2)) ||
            (((x2 < 0) && (v2 < 0)) && (v1 > v2))
        )
    ) return "NO"; // One not moving and the other moving the opposite direction
    if (
        (v2 === 0) &&
        (
            (((x1 > 0) && (v1 > 0)) && (v2 < v1)) ||
            (((x1 < 0) && (v1 < 0)) && (v2 > v1))
        )
    ) return "NO"; // Other not moving and the other moving the opposite direction

    let left = 0;
    let right = 0;
    let leftSpeed = 0;
    let rightSpeed = 0;
    if (x1 < x2) {
        left = x1;
        right = x2;
        leftSpeed = v1;
        rightSpeed = v2;
    } else if (x2 > x1) {
        left = x2;
        right = x1;
        leftSpeed = v2;
        rightSpeed = v1;
    }
    while (left < right) {
        left += leftSpeed;
        right += rightSpeed;
        if (left === right) {
            return "YES";
        }
    }
    return "NO";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}
