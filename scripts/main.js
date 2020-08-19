console.log("You are terrific");

// pulling data from other .js page that had the function
import { useFish } from './FishDataProvider.js';
// Import the FishList here
import { FishList} from './FishList.js';



const allTheFish = useFish();
console.log("all the fish", allTheFish);

for (const fish of allTheFish) {
    console.log("the item is ", fish)
}

FishList();