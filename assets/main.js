// 1. Define your class
class Recipe {
  constructor(title,description,chef,step) {
    this.title=title
    this.description=description;
    this.chef=chef;
    this.step=step;
  }
}

// 2. Initialize your object
const mainRecipes=new Recipe(
  "Beer-Braised Pork Burger",
  "This is a quick and easy recipe that results intender and flavorful pork chops.",
  "A",
  [
    "Combine flour, salt, and pepper in a large resealable plastic bag. Add pork chops and shake well to coat thoroughly.",
    "Melt butter in a large skillet over medium-high heat.Add olive oil and heat until sizzling. Add pork chops in a single layer. Saute until browned on one side, 1 1/2 to 2 minutes. Turn pork chops over and cook for an additional 1 1/2 to 2 minutes Transfer pork chops to a plate."
    ," Add beer, vinegar, mustard, brown sugar, and rosemary to the skillet and mix well. Bring to a boil over medium-high heat. Return pork chops to the skillet, cover, and reduce heat to medium-low. Simmer until pork chops are no longer pink in the center, 10 to 12 minutes. An instant-read thermometer inserted into the center should read 145 degrees F (63 degrees C)."
    
    ,
    "Transfer pork chops to a plate. Increase heat to medium and boil pan juices in the skillet until thickened, whisking often, about 3 minutes. Top pork chops with sauce."
  ])
  // 3. Validate your object
  function validation(recipe){
    if(!recipe ||typeof(recipe)!="object" ) return "1"
    if(!recipe.title || !recipe.title==="" || typeof(recipe.title)!="string" ) return "2";
    if(!recipe.description || !recipe.description==="" || typeof(recipe.description)!="string") return "3";
    if(!recipe.chef || !recipe.chef==="" || typeof(recipe.chef=="")!="string") return "4";
    if(!recipe.step || !recipe.step===[] ||typeof(recipe.step)!="object")  return "5";

    return true;
  }
  // 4. Generate the template
  function generate(recipe){
    if(!validation(recipe)){
      alert("Information is not enough or valid!!")
      return
    }
    let tmpInstruction="";
    let i=1;
    recipe.step.forEach((item)=>{
      tmpInstruction+=
      `
      <div class="step">
        <p class="step-title">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          </span>
          step ${i}
        </p>
        <p class="content">
          ${item}
        </p>
      </div>
      `
      i++;
    })
    const recipeTemplate = document.getElementsByClassName("recipe")[0];
    recipeTemplate.innerHTML=
    ` <div class="recipe_infor">
    <img src="./assets/img1.png" />
    <div class="infor">
      <h1 class="title">${recipe.title}</h1>
      <p>${recipe.description}</p>
        <h4>By Chef <span class="chef-name">${recipe.chef}</span></h4>
    </div>

  </div>
  <div class="recipe_instruction">
    <h1>Direction</h1>
    <div class="instruction">
      
      ${tmpInstruction}
    </div>
  </div>`

  }
  // 5. Create new object
  
  function render(recipe) {
    // console.log("render");
    // Generate your object ....
    // Hide button generate
    generate(mainRecipes)
    const buttonGenerate = document.getElementById("button-generate");
    buttonGenerate.style.display = "none";
    // Display template
    const recipeTemplate = document.getElementsByClassName("recipe")[0];
    recipeTemplate.style.display = "flex";
    const footer=document.querySelector("footer")
    footer.style.display="block"
  }
  