const fishCollection = [
    {
        image: "maleBetta.jpg",
        givenName: "Big Blue",
        species: "Male Betta",
        size: "2 inches",
        diet: "Brine Shrimp",
        harvestLocation: "Beaches of Petco"
    },

    {
        image: "maleBetta.jpg",
        givenName: "Pinky",
        species: "Male Betta",
        size: "2 inches",
        diet: "Brine Shrimp",
        harvestLocation: "Beaches of Petco"
    },

    {
        image: "maleBetta.jpg",
        givenName: "Big Blue",
        species: "Male Betta",
        size: "2 inches",
        diet: "Brine Shrimp",
        harvestLocation: "Beaches of Petco"
    },

    {
        image: "maleBetta.jpg",
        givenName: "Bart",
        size: "5 inches",
        diet: "crustaceans",
        species: "Clownfish",
        harvestLocation: "Petco"
    },
        
    {
        image: "maleBetta.jpg",
        givenName: "Big Mac",
        size: "6 feet",
        diet: "jellyfish",
        species: "Giant sunfish",
        harvestLocation: "Sam's Club Reef"
    },

    {
        image: "maleBetta.jpg",
        givenName: "Squigle",
        size: "2 feet",
        diet: "smaller fish",
        species: "Moray Eel",
        harvestLocation: "Ole Dan's boat wreck"
    },

    {
        image: "maleBetta.jpg",
        givenName: "Hammy",
        size: "4 feet",
        diet: "just about everything",
        species: "Groupers",
        harvestLocation: "Jimmy's big boi fishin' spot"
    },

    {
        image: "maleBetta.jpg",
        givenName: "Tiny",
        size: "1 inch",
        diet: "plankton",
        species: "Blue Chromis",
        harvestLocation: "Young Dan's boat wreck"
        }


]

// export a function that will return a copy of the original array of fish
// this uses the slice method to make the copy

export const useFish = () => {
    return fishCollection.slice()
}
