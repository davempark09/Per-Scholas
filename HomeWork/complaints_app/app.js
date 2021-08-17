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
    fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD')
    .then((response) => response.json())
    .then((data) => {data
        let filt = data.filter(dat => dat.borough==city.toUpperCase())
        console.log(filt)
        for (i=0;i<inp;i++){
                list.insertAdjacentHTML(
                "afterbegin",
                `<div class="stuff">
                <li class="desc">${filt[i].descriptor}</li>
                  <button id="resp" onload="visi()">What did the police do??</button>
                    </div>
                    <div class="response">
                        <p id="idk" class="down">${filt[i].resolution_description}</p>
                    </div>
                `
                )}
                document.getElementById("resp").addEventListener("click", visi);
                function visi() {
                    var tog = document.getElementById("idk");
                    tog.classList.remove("down");
                  }        
                }
                
                )}
                