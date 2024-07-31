function checkVowels()
{
var text=document.getElementById("inputText").value;
var welCount=0;
//convert into the lowercase
text=text.toLowerCase();

for(let i=0;i<text.length;i++){
var char =text.charAt(i);

if(isVowel(char))
    {
        welCount++;
    }
}
    var  result=document.getElementById("result");
    result.textContent="Total Vowels :"+welCount;
}
function  isVowel(char)
{
    var vowels=["a","e","i","o","u"];
    return vowels.includes(char);
}
