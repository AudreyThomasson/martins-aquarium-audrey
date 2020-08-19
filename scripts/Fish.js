/**
 *  Takes incoming fish object fromFish which renders individual fish objects as HTML
 */
export const Fish = (fishObj) => {
    return `
    <div class="fishlist-card">
        <div class="card-image">
         <img class="fish-image" src="images/${fishObj.image}" alt="${fishObj.species}">
         </div>
        <ul>
             <li>givenName: ${fishObj.givenName}</li>
            <li>Species: ${fishObj.species}</li>
            <li>Length: ${fishObj.size}</li>
            <li>Diet: ${fishObj.diet}</li>
            <li>Harvest Location: ${fishObj.harvestLocation}</li>
        </ul>
    </div>
    `
}