let url="https://date.nager.at/api/v3/publicholidays/2024/AT"
let response=fetch(url)
response.then((v)=>
{
    return v.json()
}).then((c)=>
{
    console.log(c)
    ihtml=""
    for(i in c)
    {
        console.log(c[i])
        ihtml+=`
         <div class="card mx-2 my-2" style="width: 22rem;" >
                                <div class="card-body">
                                        <h4 class="card-text"> ${c[i].name}</h4>
                                        <p>date</p>
                                        <p class="card-text" >${c[i].date}</p>
                                        <p>LocalName</p>
                                        <h5 class="card-text"> ${c[i].localName}</h5>
                                        <p>Countrycodde</p>
                                        <p class="card-text">${c[i].countryCode}</p>
                                        </div>
                        </div>
        `;
        cardContainer.innerHTML = ihtml;
    }
})