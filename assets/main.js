// 1. Define your class
class Recipe {
  constructor(title,dscription,chef,step) {
    this.title=title
    this.dscription=dscription;
    this.chef=chef;
    this.step=step;
  }
}

// 2. Initialize your object

// 3. Validate your object

// 4. Generate the template

// 5. Create new object

function render(recipe) {
  console.log("render");
  // Generate your object ....
  // Hide button generate
  const buttonGenerate = document.getElementById("button-generate");
  buttonGenerate.style.display = "none";
  // Display template
  const recipeTemplate = document.getElementsByClassName("recipe")[0];
  recipeTemplate.style.display = "block";
}
