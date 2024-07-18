let a=document.getElementById("weight")
let b=document.getElementById("height")
let c=document.getElementById("result")
let e=document.getElementById("cal")

e.addEventListener("click",function()
{
    const x = parseFloat(a.value); 
    const y = parseFloat(b.value);
    const result=x/(y*y);
    c.innerHTML=`The BMI is ${result.toFixed(2)} kg/m2`
})