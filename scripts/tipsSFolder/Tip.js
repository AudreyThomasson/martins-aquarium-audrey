/**
 *  Takes incoming tip object fromFish which renders individual tip objects as HTML
 */
export const Tip = (tipObj) => {
    return `
            <li>${tipObj}</li>
    `
};