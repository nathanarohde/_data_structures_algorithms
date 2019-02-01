function angryProfessor(k, a) {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            counter++;
            if (counter > a.length - k) return 'YES';
        }
    }
    return 'NO';
}
