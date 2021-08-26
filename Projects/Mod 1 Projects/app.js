const menu = document.querySelector('#mobile')
const menuLinks = document.querySelector('.navmenu')

menu.addEventListener('click', function(){
    menu.classList.toggle('isActive');
    menuLinks.classList.toggle('active')
})

document.querySelector(".formSheet").addEventListener("submit", submitForm)
function submitForm(e) {
    e.preventDefault()
    let name = document.querySelector(".name").value
    let phone = document.querySelector(".number").value
    let email = document.querySelector(".email").value
    let message = document.querySelector(".message").value
    sendEmail(name, phone, email, message)
}
function sendEmail(name, phone, email, message) {
    Email.send({
        SecureToken : "9e9b9c61-1212-48bd-9687-86587f16cbc4",
        To : 'davempark@gmail.com',
        From : 'holynuggets36@gmail.com',
        Subject : name+" has sent you a message",
        Body : "Name:"+name+"Phone Number:"+phone+"E-Mail"+email+"Message:"+message
    }).then(
    m => alert(m)
    );
}

const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');


searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});



function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                <div class = "meal-item" data-id = "${meal.idMeal}">
                <div class = "meal-img">
                <img src = "${meal.strMealThumb}" alt = "food">
                </div>
                <div class = "meal-name">
                <h3>${meal.strMeal}</h3>
                <a href = "#" class = "recipe-btn">Get Recipe</a>
                </div>
                </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }
        
        mealList.innerHTML = html;
    });
}



function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}


function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
    <h2 class = "recipe-title">${meal.strMeal}</h2>
    <p class = "recipe-category">${meal.strCategory}</p>
    <div class = "recipe-instruct">
    <h3>Instructions:</h3>
    <p>${meal.strInstructions}</p>
    </div>
    <div class = "recipe-meal-img">
    <img src = "${meal.strMealThumb}" alt = "">
    </div>
    <div class = "recipe-link">
    <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
    </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}



