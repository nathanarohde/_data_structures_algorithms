//118 cases
//Runtime 60ms top 17% fastest 52ms
//Memory 33.7MB top 7.5% smallest 33.5MB

var longestCommonPrefix = function(strs) {
    preFix = strs[0] || "";
    //take first character of first string compare to all other strings
    //reduce preFix length to length of string it is compare to
    //if match proceed to next to string
    //else iterate backwards
    for (let i=1; i < strs.length; i++){
        if (strs[i] === "") return "";
        if (preFix.length > strs[i].length) preFix = preFix.substring(0, strs[i].length);
        while (preFix !== strs[i].substring(0, preFix.length) && preFix.length > 0){
            preFix = preFix.substring(0, preFix.length - 1);
        }
        if (preFix === '') return preFix;
    }
    return preFix;
};
