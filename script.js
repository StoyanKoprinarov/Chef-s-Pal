

let button = document.querySelector('#searchButton')
let button1 = document.querySelector('#searchButton1')
let button2 = document.querySelector('#searchButton2')
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


let button4 = document.querySelector('#searchButton1')
let mealCategory = document.querySelector('#mealCategory')
async function getData1(event){
   event.preventDefault()
let textInput = document.querySelector('#searchInput').value
const url = `https://themealdb.com/api/json/v1/1/filter.php?c=${textInput}`
console.log(url)

fetch(url)
 .then(res =>  
    res.json()
 )
 .then((res) => { 
  const mealCategory = res.meals
  mealCategory.map((item, i) => {
      console.log(item);
      let mealCategory = document.querySelector('#mealCategory')
      const image  = res.meals[i].strMealThumb
      const name = res.meals[i].strMeal
const li = `<li> <img class='small-img' src=${image}>  <div id="div1">${name}</div></li>`
mealCategory.innerHTML += li

    })
})
}
  button4.onclick = getData1


let button5 = document.querySelector("#searchButton1")


  function myFunction () {
  
    document.getElementById("item5").style.backgroundColor = "rgb(62,58,58)";
    document.getElementById("item4").style.backgroundColor = "rgb(62,58,58)";
    document.getElementById("mealImg").src = "https://media.istockphoto.com/id/491663447/vector/vegetable-icons-set.jpg?s=612x612&w=0&k=20&c=8Ql4Y1VFcbWTP-D_713iklx4jFomYDP5TQoYPc3yQPY=";
    document.getElementById("directions").innerText= ""
    document.getElementById("measures").innerText= ""
  }
  
  
   button5.onclick = myFunction



