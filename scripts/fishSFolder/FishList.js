/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useFish, makeMostHolyFish, makeSoldierFish, makeUnworthyFish } from "./FishDataProvider.js";
import { Fish } from "./Fish.js";

export const FishList = () => {

    // Get a reference to the `<article class="fishList">` element
    // const allTheBigAndSmallFish = useFish();
    const holyFish = makeMostHolyFish();
    addFishToDom(holyFish);

    const soldiers = makeSoldierFish();
    addFishToDom(soldiers);

    const unworthy = makeUnworthyFish();
    addFishToDom(unworthy);
}

const addFishToDom = (whichFishArray) => {
    const contentElement = document.querySelector(".fishList");
    let fishHTMLRepresentation = "";
    for (const oneThingFromTheSea of whichFishArray) {
        fishHTMLRepresentation += Fish(oneThingFromTheSea);

        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${fishHTMLRepresentation}
        
    `
}