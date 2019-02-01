// finds total pairs in array
function sockMerchant(n, ar) {
    let socks = {};
    let pairs = 0;
    for (let i = 0; i < ar.length; i++){
        socks[ar[i]] ? socks[ar[i]] += 1 : socks[ar[i]] = 1;
    }
    for (let sockType in socks) {
        pairs += Math.floor(socks[sockType] / 2);
    }
    return pairs;
}
