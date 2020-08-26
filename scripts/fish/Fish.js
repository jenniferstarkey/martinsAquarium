export const Fish = (fishObj) => {
    return `
    <div class="fishList-card"></div>
                        <div class="card-image">
                            <img class="fish-image" src="images/${fishObj.image}" alt="${fishObj.species}">
                </div>
                <ul>
                    <li>Given Name:${fishObj.givenname}</li>
                    <li>Species:${fishObj.species}</li>
                    <li>Length:${fishObj.length}</li>
                    <li>Diet:${fishObj.diet}</li>
                    <li>Harvest Location:${fishObj.harvestlocation} </li>
                 </ul>
            </div>
            `
}