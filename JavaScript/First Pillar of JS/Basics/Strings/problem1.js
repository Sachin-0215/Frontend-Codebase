//count the frequency of characters in a string

let freqMap = {};//empty object
// let str = "SACHINaa";
let str = "nitinitn"

for (const char of str) {
    //if present update it
    if (freqMap[char]) {//if char is not present we have a false ,undefined converted boolean in if else condition checking
        //freqMap.char -> not getting expected output
        freqMap[char] += 1;//update
    }
    else {
        // if not present add it
        freqMap[char] = 1;
        //add a new key value pair
    }
}
//when you are using object.something you get key , if you using variable then bracket is preferable

console.log(freqMap);