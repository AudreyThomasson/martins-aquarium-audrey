const tipCollection = [
    "feed fish daily",
    "talk to your fish",
    "clean your tank weekly",
    "add fresh water",
    "change filter media"

    ];


// export a function that will return a copy of the original array of fish
// this uses the slice method to make the copy

export const useTip = () => {
    return tipCollection.slice()
}
