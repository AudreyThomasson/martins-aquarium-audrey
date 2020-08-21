const fishCollection = [
    {
        image: "maleBetta.jpg",
        givenName: "Big Blue",
        species: "Male Betta",
        size: 2,
        diet: "Brine Shrimp",
        harvestLocation: "Beaches of Petco"
    },

    {
        image: "angelFish.jpg",
        givenName: "Pinky",
        species: "Male Betta",
        size: 6,
        diet: "Brine Shrimp",
        harvestLocation: "Beaches of Petco"
    },

    {
        image: "anthiasFish.jpg",
        givenName: "Big Blue",
        species: "Male Betta",
        size: 12,
        diet: "Brine Shrimp",
        harvestLocation: "Beaches of Petco"
    },

    {
        image: "butterflyFish.jpg",
        givenName: "Bart",
        size: 5,
        diet: "crustaceans",
        species: "Clownfish",
        harvestLocation: "Petco"
    },
        
    {
        image: "clownFish.jpg",
        givenName: "Big Mac",
        size: 8,
        diet: "jellyfish",
        species: "Giant sunfish",
        harvestLocation: "Sam's Club Reef"
    },

    {
        image: "lionFish.jpg",
        givenName: "Squigle",
        size: 24,
        diet: "smaller fish",
        species: "Moray Eel",
        harvestLocation: "Ole Dan's boat wreck"
    },

    {
        image: "queenslandGroperFish.jpg",
        givenName: "Hammy",
        size: 48,
        diet: "just about everything",
        species: "Groupers",
        harvestLocation: "Jimmy's big boi fishin' spot"
    },

    {
        image: "surgeonFish.jpg",
        givenName: "Tiny",
        size: 1,
        diet: "plankton",
        species: "Blue Chromis",
        harvestLocation: "Young Dan's boat wreck"
        }


]

// export a function that will return a copy of the original array of fish
// this uses the slice method to make the copy
// First randomized collection of fish

export const useFish = () => {
    return fishCollection.slice();
}



// friday's work starts under here-----------------------------

export const makeMostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const mostHolyFishArray = [];

    for (const theFish of fishCollection) {
// the const theFish is only for this loop. It is a new name. aka the hand
        if (theFish.size % 3 === 0) {
            mostHolyFishArray.push(theFish);
        }
    }
    return mostHolyFishArray;
}

// --------------------------------

export const makeSoldierFish = () => {
    // 5, 10, 20, 25, etc... fish
    const soldierFishArray = [];

    for (const fishObj of fishCollection) {
        // divisible by 5 but don't include the 3
        if (fishObj.size % 5 === 0 && fishObj.size % 3 !== 0) {
            soldierFishArray.push(fishObj);
        }
    }
    return soldierFishArray;
}

// --------------------------------


export const makeUnworthyFish = () => {
    // Any fish not a multiple of 3 or 5
    const unworthyFishArray = [];
    for (const fishObj of fishCollection) {
        if (fishObj.size % 5 !== 0 && fishObj.size % 3 !== 0) {
            unworthyFishArray.push(fishObj);
        }
    }
    return unworthyFishArray;
}