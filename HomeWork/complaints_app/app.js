const stuff = document.querySelector(".stuff");
const list = document.querySelector(".list");
let buttons = document.querySelectorAll(".boros");
let input = document.querySelector("#num");


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let inputValue = input.value;
    let buttonValue = btn.value;
    if (!inputValue) {
      inputValue = 10;
    }
    fetchData(inputValue, buttonValue);
  });
});


function fetchData(inp, city) {
    list.innerHTML = "";
    fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${inp}&agency=NYPD&borough=${city.toUpperCase()}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        for (i=0;i<data.length;i++){
                list.insertAdjacentHTML(
                "afterbegin",
                `<div class="stuff">
                <li class="desc">${data[i].descriptor}</li>
                  <button class="resp">What did the police do??</button>
                    </div>
                    <div class="response">
                        <p class="down idk">${data[i].resolution_description}</p>
                    </div>
                `
                );
                visi();
            }
          });
        function visi() {
          let res = document.querySelector(".resp");
          var tog = document.querySelector(".idk");
          res.addEventListener("click", () => {
            tog.classList.remove("down");
            console.log("clicked");
          });
        }
      }
            
           