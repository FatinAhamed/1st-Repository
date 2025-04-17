function isAcronym(words, s) {
   
    let acronym = words.map(word => word[0]).join('');
    

    return acronym === s;
}

console.log(isAcronym(["alice","bob","charlie"], "abc"));
console.log(isAcronym(["an","apple"], "a"));
console.log(isAcronym(["never","gonna","give","up","on","you"], "ngguoy"));