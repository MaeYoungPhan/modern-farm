// In this module, define and export a plantSeeds function.
// The function must accept the year's planting plan as input (i.e. it must define a parameter).
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

import { addPlant } from "./field.js"

export const plantSeeds = (plans) => {
 // The plan is an array. It contains 4 arrays representing the rows in the field to be plants. Figure out how to iterate both the parent array and the child arrays. For loop
   for (const rows of plans) {
    for (const plant of rows) {
     // As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
        if (plant === "Asparagus") {
            addPlant(createAsparagus())
        } else if (plant === "Potato") {
            addPlant(createPotato())
        } else if (plant === "Wheat") {
            addPlant(createWheat())
        } else if (plant === "Sunflower") {
            addPlant(createSunflower())
        } else if (plant === "Soybean") {
            addPlant(createSoybean())
        }
        else {
            addPlant(createCorn())
        }
    }
    }

}

// Take that seed and add it to the array of plants in the field module. 
//^ createSeed becomes argument for addPlant function, pushes seedObject to plantsArray