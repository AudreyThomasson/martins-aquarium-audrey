/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useFish } from './FishDataProvider.js';

export const FishList = () => {

    // Get a reference to the `<article class="fishList">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `

            All the fish go here!
        
    `
}