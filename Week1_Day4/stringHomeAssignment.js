// return the length of the last word in the string
/*let str=""
function len(str){
let word=str.trim().split(" ")
console.log(word);
let lastWord=word[word.length-1]
let len=lastWord.length
console.log(`The last word is ${lastWord} with length ${len}`)
}
len(" Hello World ")
len("fly me  to  the moon")*/

//check if two strings are anagrams
let str1=""
let str2=""
function isAnagram(str1,str2){
    let sortedStr1=str1.toLowerCase().split("").sort().join("")
    let sortedStr2=str2.toLowerCase().split("").sort().join("")
    if(sortedStr1===sortedStr2){
        console.log("Yes,it is an anagram")
            }
        else
            console.log("It is not an anagram");
           

    }
    isAnagram("Hello","World")


