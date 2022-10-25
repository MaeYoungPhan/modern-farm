export const harvestPlants = (plantsArray) => {
    const seedObjects = []
    // Iterate the array of growing plants. 
    for (const plant of plantsArray) {
        let output = ""
        // On each plant, get the value of the output property.
        if (plant.type === "Corn") {
            output = plant.output / 2
            console.log(output)
        }
        else {
            output = plant.output
            console.log(output)
        }
        for (let x = 0; x < output; x++) {
            // Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
            seedObjects.push(plant)
        }
    }
        return seedObjects
}
    



// In this module, define and export a harvestPlants function.
// The harvestPlants function must accept the plants array as input.
// export const harvestPlants = (plantsArray) => {
//     const seedObjects = []
//     // Iterate the array of growing plants. 
//     for (const plant of plantsArray) {
//         let output = ""
//         // On each plant, get the value of the output property.
//         if (plant.type === "Corn") {
//             output = plant.output / 2
//             console.log(output)
//         }
//         else {
//             output = plant.output
//             console.log(output)
//         }
//         for (let x = 0; x < output; x++) {
//             // Add that many of the plant objects to the array that the function returns. For example, if the current plant is a peanut object with an output of 2...
//             seedObjects.push(plant)
//         }
//         return seedObjects
//     }


// The function will return an array of seed objects.