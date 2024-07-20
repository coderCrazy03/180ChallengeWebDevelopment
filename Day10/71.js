let url = "https://api.postalpincode.in/pincode/389230";
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
                <div class="card mx-8 my-8" style="width: 49rem;" >
                                <div class="card-body">
                                        <p class="card-text"> Status is ${contests[item].Status}</p>
                                        <div class="post-offices">
                                        ${contests[item].PostOffice.map(
                                          (postOffice) => `
                                          <table class="table">
  <thead>
    <tr>
         <th scope="col">Name</th>
         <th scope="col">Pincode</th>
         <th scope="col">Dist.</th>
         <th scope="col">Division</th>
         <th scope="col">Region</th>
         <th scope="col">Block</th>
         <th scope="col">State</th>
         <th scope="col">Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${postOffice.Name}</td>
      <td>${postOffice.Pincode}</td>
      <td>${postOffice.District}</td>
      <td>${postOffice.Division}</td>
       <td>${postOffice.Region}</td>
      <td>${postOffice.Block}</td>
      <td>${postOffice.State}</td>
      <td>${postOffice.Country}</td>
    </tr>
  </tbody>
</table>
                                          `).join("")}
                                       </div>
                                </div>
                </div>`;
    }
    cardContainer.innerHTML = ihtml;
  });

/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }
