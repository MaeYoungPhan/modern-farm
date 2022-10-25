console.log("Welcome to the main module")
//Import function from plan.js
import { createPlan } from './plan.js'

//Declare yearlyPlan variable to contain imported function and console.log to check it's working
const yearlyPlan = createPlan()
console.log(yearlyPlan)

import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

// const seedObject = {id:15, type: "Spooky Pumpkin", height: 50, output: 500}

import { addPlant } from "./field.js"

import { usePlants } from "./field.js"

import { plantSeeds } from "./tractor.js"

import { harvestPlants } from "./harvester.js"

import { catalog } from "./catalog.js"

// addPlant(seedObject)

plantSeeds(yearlyPlan)

const sowing = usePlants()

const harvesting = harvestPlants(sowing)
console.log(harvesting)

const viewCatalog = catalog(harvesting)
console.log(viewCatalog)

document.querySelector(".container").innerHTML += viewCatalog

