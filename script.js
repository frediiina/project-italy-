// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for each region on the map
    var lazioRegion = document.getElementById("lazio-region");
    var apuliaRegion = document.getElementById("apulia-region");
    var venetoRegion = document.getElementById("veneto-region");

    lazioRegion.addEventListener("mouseover", function () {
        displayRecipe("Lazio", "Cacio e Pepe", "Pecorino Romano, Peppercorns, Butter, Spaghetti", "https://www.greatitalianchefs.com/recipes/cacio-e-pepe-recipe");
    });

    apuliaRegion.addEventListener("mouseover", function () {
        displayRecipe("Apulia", "Orecchiette con Cime di Rapa", "Orecchiette, Garlic cloves, Red chillies, Anchovies, Broccoli rabe or tenderstem broccoli, Pecorino", "https://www.greatitalianchefs.com/recipes/orecchiette-con-cime-di-rapa-recipe");
    });

    venetoRegion.addEventListener("mouseover", function () {
        displayRecipe("Veneto", "Risotto al nero di seppia", "Risotto rice, Squid ink, White wine, Chicken or vegetable broth, Olive oil, Onion, Garlic, Parmesan cheese, Butter, Salt and pepper, Fresh parsley", "https://www.greatitalianchefs.com/recipes/risotto-al-nero-di-seppia-recipe");
    });

    // Function to display recipe information
    function displayRecipe(region, dish, ingredients, recipeLink) {
        // You can customize this part based on how you want to display the recipe information
        console.log("Region: " + region);
        console.log("Dish: " + dish);
        console.log("Ingredients: " + ingredients);
        console.log("Recipe Link: " + recipeLink);
    }
});

