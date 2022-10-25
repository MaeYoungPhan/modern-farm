// Define and export a Catalog function.
// The Catalog function should accept the harvested food array as input.

export const catalog = (harvestArr) => {
// The Catalog function should iterate the array of food objects.
    let htmlString = ``
    
    for (const food of harvestArr){
    // As you iterate the array, the <main> element should have its inner HTML appended with an HTML representation of a food item.
    htmlString += `<section class="plant"> ${food.type} </section>`
    }
    htmlString += ``
    return htmlString

}