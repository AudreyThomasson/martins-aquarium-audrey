/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useFish, makeMostHolyFish, makeSoldierFish, makeUnworthyFish } from './fishSFolder/FishDataProvider.js';
import { Fish } from "./Fish.js";

export const FishList = () => {

    // Get a reference to the `<article class="fishList">` element
    // const fishes = useFish()
    const holyFish = makeMostHolyFish();
    addFishToDom(holyFish);

    const soldiers = makeMostSoldierFish();
    addFishToDom(soliers);

    const unworthy = makeUnworthyFish();
    addFishToDom(unworthy);
}

const addFishToDom = (whichFishArray) => {
    const contentElement = document.querySelector(".fishList");
    let fishHTMLRepresentation = "";
    for (const fish of fishes) {

        fishHTMLRepresentation += Fish(fish);

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