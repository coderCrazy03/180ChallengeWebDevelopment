let a = [
    "Let's start to hack...",
    "Connecting to Instagram...",
    "Connecting to server 1...",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    "Trying Brute Force...",
    "200 passwords tried...",
    "Match not found",
    "Another 200 passwords tried...",
    "Match not found...",
    "Another 200 passwords tried...",
    "Match not found...",
    "Another 200 passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful...",
  ];
  
  let b = [
      "💻💻💻💻.....Hey I am Monster..👺",
      "you are Connecting to black--web...",
      "Connecting to server 1...",
      "Retrying...",
      "Connecting to server 2",
      "Connected Successfully...",
      "your name is  Mehul 🤖🤖...",
      "your location is Ahmadabad 👻👻...",
      "Accessing Account...",
      "Hack Successful...",
      "muredred succesfull....."
    ];
  
  const sleep= async (s)=>
  {
      return new Promise((resolve,reject)=>
      {
          setTimeout(()=>
          {
          resolve(true)
          },s*1000)
      })
  }
  
  const show= async (message)=>
  {
  await sleep(2)
  text.innerHTML=text.innerHTML+ message + "<br>"
  }
  
  
  (async ()=>
  {
      for(let i=0;i<b.length;i++)
      {
        await show(a[i])
        await show(b[i])
      }
  })()
  
  
  