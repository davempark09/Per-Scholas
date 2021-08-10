// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var prompt=require('prompt-sync')();
var z=String(prompt('Character to test: '));
isCharacterAVowel = (x) => {
    x= x.toLowerCase()
    if(x =='a' || x =='e' || x =='i' || x =='o' || x =='u'){
        return true
    }
    else{
        return false
    }
}
console.log(isCharacterAVowel(z))



// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var prompt=require('prompt-sync')();
var c=String(prompt('Enter Characters To Be Reversed: '));
function reverseString(str){
    var srj = str.split("").reverse("").join("");
    return srj
    }
console.log(reverseString(c))



// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

var prompt=require('prompt-sync')();
var amt=prompt('How Many Words Do You Want To Run: ')
const arr=[]
for (i=1;i<=amt;i++){
    var str=prompt('Enter Words To Be Run: ');
    arr.push(str)
}   
function findLongestWord(ent) {
    let words = '';
    for (let i = 0; i < ent.length; i++) {
      if (words.length < ent[i].length) {
        words = ent[i];
      }
    }
    return words;
  }
console.log(findLongestWord(arr).length)



//Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

var prompt=require('prompt-sync')();
var amt=prompt('How Many Words Do You Want To Run: ')
const arr=[]
var num=prompt('What Number Do You Wish The Words Be Longer Then: ')
const win=[]
for (i=1;i<=amt;i++){
    var str=prompt('Enter Words To Be Run: ');
    arr.push(str)
}   
function filterLongWords(ent) {
    for (let i = 0; i < ent.length; i++) {
      if (ent[i].length > num) {
        win.push(ent[i]);
      }
    }
    if(win.length!=0){
        return win;
    }
    else {
        return ('There Is No Word Longer Than ' + num);
    }
  }
console.log(filterLongWords(arr))


