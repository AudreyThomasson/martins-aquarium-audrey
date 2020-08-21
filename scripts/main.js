console.log("You are terrific");

// pulling data from other .js page that had the function
import { useFish, makeMostHolyFish, makeSoldierFish, makeUnworthyFish } from './fishSFolder/FishDataProvider.js';
// Import the FishList here
import { FishList} from './fishSFolder/FishList.js';

// pulling data from other .js page that had the function
import { useTip } from './tipsSFolder/TipDataProvider.js';
// Import the TipList here
import { TipList} from './tipsSFolder/TipList.js';




const allTheFish = useFish();
console.log("all the fish", allTheFish);

FishList();
// makeMostHolyFish();            We don't really need these ACK
// makeSoldierFish();
// makeUnworthyFish();


const allTheTips = useTip();
console.log(allTheTips);
TipList();