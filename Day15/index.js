function cal()
{
    const principle=parseFloat(document.getElementById('principle').value);
    const Interest=parseFloat(document.getElementById('Interest').value);
    const Tenure=parseFloat(document.getElementById('Tenure').value);

const mature=principle+(principle*Interest*Tenure)/100;
document.getElementById("data").innerText=`Maturity Amount:${mature.toFixed(2)}`;
}

document.getElementById("cal").addEventListener('click',cal);