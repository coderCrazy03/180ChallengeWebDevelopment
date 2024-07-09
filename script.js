let player=prompt("Enter the Items: ");
let inputCmp=Math.floor(Math.random()*3);
let computer=["Gun","Water","Snake"][inputCmp];
const Play=(player,computer)=>
{
    if(computer===player)
    {
        return "The Match is Tie!"
    }
    else if(computer==="Gun" && player==="Water")
    {
       return "Player"
    }
    else if(computer==="Gun" && player==="Snake")
    {
        return "Computer"
    }
    else if(computer==="Water" && player==="Gun")
        {
           return "Computer"
        }
    else if(computer==="Water" && player==="Snake")
        {
            return "Player"
        }
    else if(computer==="Snake" && player==="Gun")
            {
               return "Player"
            }
    else if(computer==="Snake" && player==="Water")
            {
                return "Computer"
            }
}
result = Play(player,computer)
document.getElementById('show').innerHTML=`Computer :${computer}<br>Player: ${player}<br>The winner is: ${result.toUpperCase()}`



