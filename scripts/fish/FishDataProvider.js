const fishCollection= [
    {
        givenname: "Pinky",
        diet: "Fish Food",
        length: 3,
        species: "Pink Swimmer",
        harvestlocation: "Local Pet Store",
        image: "angryFish.jpg"
    },
    {
        givenname: "Lemons",
        diet: "Algae",
        length: 5,
        species: "Yellow Zoomer",
        harvestlocation: "Great Barrier Reef",
        image: "angryFish.jpg"

    },
    {
        givenname: "Peaches",
        diet: "Fish Food",
        length: 3,
        species: "Big Poppa",
        harvestlocation: "Missippi River",
        image: "angryFish.jpg"

    },
    {
        givenname: "Rawr",
        diet: "Other fishes",
        length: 2,
        species: "Pointed flyer",
        harvestlocation: "South African Coast",
        image: "angryFish.jpg"

    },
    {
        givenname: "Barney",
        diet: "Seahorse babies",
        length: 9,
        species: "Big guy",
        harvestlocation: "Mexico",
        image: "angryFish.jpg"

    },
    {
        givenname: "Clifford",
        diet: "algae",
        length: 4,
        species: "Big Red Fish",
        harvestlocation: "Florida",
        image: "angryFish.jpg"

    },
    {
        givenname: "Rachel",
        diet: "floating specs",
        length: 3,
        species: "Basic fish",
        harvestlocation: "California Coast",
        image: "angryFish.jpg"

    },
    {
		givenname: "Bart",
		length: 5,
		diet: "crustaceans",
		species: "Clownfish",
        harvestlocation: "Petco",
        image: "angryFish.jpg"

	},
	{
		givenname: "Big Mac",
		length: 13,
		diet: "jellyfish",
		species: "Giant sunfish",
        harvestlocation: "Sam's Club Reef",
        image: "angryFish.jpg"

	},
	{
		givenname: "Squigle",
		length: 20,
		diet: "smaller fish",
		species: "Moray Eel",
        harvestlocation: "Ole Dan's boat wreck",
        image: "angryFish.jpg"

	},
	{
		givenname: "Hammy",
		length: 8,
		diet: "just about everything",
		species: "Groupers",
        harvestlocation: "Jimmy's big boi fishin' spot",
        image: "angryFish.jpg"

	},
	{
		givenname: "Tiny",
		length: 9,
		diet: "plankton",
		species: "Blue Chromis",
        harvestlocation: "Young Dan's boat wreck",
        image: "angryFish.jpg"

    },
    {
        species: "Gem Tang",
        givenname: "Diamond",
        length: 6,
        diet: "Algae Strips",
        harvestlocation: "South Africa",
        image: "angryFish.jpg"

    },
    {
        species: "Black Tang",
        givenname: "Midnight",
        length: 1,
        diet: "Vegetation",
        harvestlocation: "Croatia",
        image: "angryFish.jpg"

    },
    {
        species: "Crosshatch Triggerfish",
        givenname: "Itchy",
        length: 13,
        diet: "Micronutrients",
        harvestlocation: "Blue Hole",
        image: "angryFish.jpg"

    },
    {
        species: "Candy Basslet",
        givenname: "Cherry",
        length: 3,
        diet: "Algae",
        harvestlocation: "Brazil",
        image: "angryFish.jpg"
    },
    {
        species: "Japanese Interruptus Angelfish",
        givenname: "Rainbow",
        length: 17,
        diet: "Fish pellets",
        harvestlocation: "South Africa",
        image: "angryFish.jpg"

    },
    {
        species: "Clarion Angelfish",
        givenname: "Banana Stripe",
        length: 11,
        diet: "Micronutrients",
        harvestlocation: "Antiqua",
        image: "angryFish.jpg"

    },
    {
        species: "Wrought Iron Butterfly",
        givenname: "Zebra",
        length: 10,
        diet: "Crustaceans",
        harvestlocation: "Croatia",
        image: "angryFish.jpg"

    },
    {
        species: "Neptune Grouper",
        givenname: "Squigy",
        length: 12,
        diet: "Algae",
        harvestlocation: "Bahamas",
        image: "angryFish.jpg"

    },
]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice();
}

export const makeMostHolyFish = () => {
    // 3,6,9,12,14,16,19,21,24,27
    const mostHolyFishArray = [];

    for (const theFish of fishCollection){
        if(theFish.length % 3 ===0){
            mostHolyFishArray.push(theFish)
        }
    }
    console.log("mostHolyFishArray", mostHolyFishArray)
    return mostHolyFishArray

}
export const makeSoldierFish = () => {
    // 5,10,20,25,35
    const soldierFishArray = [];

    for (const fishObj of fishCollection){
        // divisible by 5 but exclude those divisible by 3
        if(fishObj.length % 5 ===0 && fishObj.length % 3 !== 0){
            soldierFishArray.push(fishObj)
        }
    }
    console.log("soldierFishArray", soldierFishArray)
    return soldierFishArray
}