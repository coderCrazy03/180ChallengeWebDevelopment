let a=document.getElementById("dob")
let b=document.getElementById("cal")
let c=document.getElementById("result")

b.addEventListener("click",function()
{
    const dob=new Date(a.value)
    const ageInMin=Date.now()-dob.getTime()
    const ageDate=new Date(ageInMin)
    const age=Math.abs(ageDate.getUTCFullYear()-1970)
    const month=Math.abs(ageDate.getUTCMonth())+age*12;
    c.innerHTML=`Your age is : ${age} years OR ${month} months`;
})