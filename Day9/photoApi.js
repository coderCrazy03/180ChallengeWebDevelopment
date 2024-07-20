let url = "https://picsum.photos/v2/list";
let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contests) => {
    console.log(contests);
    ihtml = "";
    for (item in contests) {
      console.log(contests[item]);
      ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;" >
                                <div class="card-body">
                                        <h4 class="card-text"> ImageID: ${contests[item].id}</h4>
                                        <img style="height:10rem; width:10rem;"src="${contests[item].download_url}">
                                        <h5 class="card-text"> ${contests[item].author}</h5>
                                          <p>Size</p><p class="card-text">${contests[item].height}x${contests[item].width}px</p>
                                        <p>url</p>
                                        <p class="card-text" style=" color:blue"><a href="${contests[item].url}">click here to go image...</a></p>
                                        <p>Status download <p>
                                        <p class="card-text" style="text-decoration:underline; color:blue;"><a href="${contests[item].download_url}">click here to download image...</a></p>
                                        </div>
                        </div>`;
    }
    cardContainer.innerHTML = ihtml;
  });

