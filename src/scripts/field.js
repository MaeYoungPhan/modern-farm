// Define a variable in this module whose initial value is an empty array. This array will store all of the plants that are growing in the field. Do not export the array.

const plantsArray = [];

// In the module, define and export a function named addPlant that takes a seed object as a parameter.
export const addPlant = (seedObject) => {
    //Add the seed to the field using the .push method
    if (Array.isArray(seedObject)) {
        for (const seed of seedObject)
    plantsArray.push(seed)
    }
    else {
        plantsArray.push(seedObject)
    }
}
// The function will add the seed to the field (How do you add something to an array? Do you remember the method for it?).
export const usePlants = () => {
    return plantsArray.map(x => ({...x}))
    // return plantsCopy
}
// Define and export a function named usePlants that returns a copy of the array of plants.
// Be aware that when planting corn, an array of objects will be provided instead of a single object like all the other type of seeds. Investigate the Array.isArray method to check if corn got passed in, or one of the others.