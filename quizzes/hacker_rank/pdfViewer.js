// return area based on word length and height passed by array
function designerPdfViewer(h, word) {
    // char code -97 to code in h array
    // multiply maxHeight to word.length

    let newWord = word.toLowerCase();

    let maxHeight = h[(newWord.charCodeAt(0)) - 97];
    for (let i = 1; i < newWord.length; i++){
        console.log(newWord[i]);
        console.log(i);
        if (maxHeight < h[(newWord.charCodeAt(i) - 97)]) {
            maxHeight = h[(newWord.charCodeAt(i) - 97)];
        };
    }
    return maxHeight * newWord.length;
}

// console.log(designerPdfViewer([4, 2, 1, 2, 3, 4, 3, 7, 4, 1, 5, 6, 1, 3, 2, 6, 6, 3, 7, 3, 1, 1, 5, 1, 1, 4], 'qjhwkcexec'))
