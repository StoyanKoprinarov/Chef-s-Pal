let button = document.querySelector('#searchButton')
async function getData(event){
    event.preventDefault()   
fetch(`https://themealdb.com/api/json/v1/1/random.php`)
 .then(res =>  { 
    return res.json()
 })
 .then(data => {
        console.log(data)
        let mealImg = document.querySelector("#mealImg")
        mealImg.src = data.meals[0].strMealThumb
        let mealName = document.querySelector("#mealName")
        mealName.innerText = data.meals[0].strMeal
        let mealOrigin = document.querySelector("#mealOrigin")
        mealOrigin.innerText = data.meals[0].strArea
        let directions = document.querySelector("#directions")
        directions.innerText = data.meals[0].strInstructions
        let ingredients = document.querySelector("#ingredients")
        ingredients.innerText = data.meals[0].strIngredient1
        let measures = document.querySelector("#measures")
        measures.innerText = data.meals[0].strMeasure1
        let ingredients1 = document.querySelector("#ingredients1")
        ingredients1.innerText = data.meals[0].strIngredient2
        let measures1 = document.querySelector("#measures1")
        measures1.innerText = data.meals[0].strMeasure2
        let ingredients2 = document.querySelector("#ingredients2")
        ingredients2.innerText = data.meals[0].strIngredient3
        let measures2 = document.querySelector("#measures2")
        measures2.innerText = data.meals[0].strMeasure3
        let ingredients3 = document.querySelector("#ingredients3")
        ingredients3.innerText = data.meals[0].strIngredient4
        let measures3 = document.querySelector("#measures3")
        measures3.innerText = data.meals[0].strMeasure4
        let ingredients4 = document.querySelector("#ingredients4")
        ingredients4.innerText = data.meals[0].strIngredient5
        let measures4 = document.querySelector("#measures4")
        measures4.innerText = data.meals[0].strMeasure5
        let ingredients5 = document.querySelector("#ingredients5")
        ingredients5.innerText = data.meals[0].strIngredient6
        let measures5 = document.querySelector("#measures5")
        measures5.innerText = data.meals[0].strMeasure6
        let ingredients6 = document.querySelector("#ingredients6")
        ingredients6.innerText = data.meals[0].strIngredient7
        let measures6 = document.querySelector("#measures6")
        measures6.innerText = data.meals[0].strMeasure7
        let ingredients7 = document.querySelector("#ingredients7")
        ingredients7.innerText = data.meals[0].strIngredient8
        let measures7 = document.querySelector("#measures7")
        measures7.innerText = data.meals[0].strMeasure8
        let ingredients8 = document.querySelector("#ingredients8")
        ingredients8.innerText = data.meals[0].strIngredient9
        let measures8 = document.querySelector("#measures8")
        measures8.innerText = data.meals[0].strMeasure9
        let ingredients9 = document.querySelector("#ingredient9")
        ingredients9.innerText = data.meals[0].strIngredient10
        let measures9 = document.querySelector("#measures9")
        measures9.innerText = data.meals[0].strMeasure10
        let ingredients10 = document.querySelector("#ingredients10")
        ingredients10.innerText = data.meals[0].strIngredient11
        let measures10 = document.querySelector("#measures10")
        measures10.innerText = data.meals[0].strMeasure11
        let ingredients11 = document.querySelector("#ingredients11")
        ingredients11.innerText = data.meals[0].strIngredient12
        let measures11 = document.querySelector("#measures11")
        measures11.innerText = data.meals[0].strMeasure12
        let ingredients12 = document.querySelector("#ingredients12")
        ingredients12.innerText = data.meals[0].strIngredient13
        let measures12 = document.querySelector("#measures12")
        measures12.innerText = data.meals[0].strMeasure13
        let ingredients13 = document.querySelector("#ingredients13")
        ingredients13.innerText = data.meals[0].strIngredient14
        let measures13 = document.querySelector("#measures13")
        measures13.innerText = data.meals[0].strMeasure14
        let ingredients14 = document.querySelector("#ingredients14")
        ingredients14.innerText = data.meals[0].strIngredient15
        let measures14 = document.querySelector("#measures14")
        measures14.innerText = data.meals[0].strMeasure15
        let ingredients15 = document.querySelector("#ingredients15")
        ingredients15.innerText = data.meals[0].strIngredient16
        let measures15 = document.querySelector("#measures15")
        measures15.innerText = data.meals[0].strMeasure16
    
        

})

.catch(err => 
    console.log("something went wrong...", err)
  );

}
button.onclick = getData
