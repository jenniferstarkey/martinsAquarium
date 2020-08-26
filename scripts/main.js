console.log("You're awesome");
import { useFish, makeMostHolyFish, makeSoldierFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'

const allTheFish = useFish()
console.log("All the fish", allTheFish);

FishList();

makeMostHolyFish();

makeSoldierFish();

// tip data code

import { useTips } from './tips/TipDataProvider.js'
const allTheTips = useTips()
for (const tip of allTheTips) {
    console.log(tip)
}