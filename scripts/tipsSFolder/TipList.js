/**
 *  TipList which renders individual tips objects as HTML
 */

// TODO: Import `useTip` from the data provider module

import { useTip } from './TipDataProvider.js';
import { Tip } from "./Tip.js";

export const TipList = () => {

    // Get a reference class used for the tip lines element
    const contentElement = document.querySelector(".tipLines")
    const tips = useTip()

    let tipHTMLRepresentation = "";
    for (const tip of tips) {

        tipHTMLRepresentation += Tip(tip);

        /*
            Invoke the Tip component function
            and pass the current tip object as an argument.
            Each time, add the return value to the
            tipHTMLRepresentations variable with `+=`
        */
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        ${tipHTMLRepresentation}
        
    `
}