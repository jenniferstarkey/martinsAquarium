const tipCollection = [ 
    {
    tip: "Feed the Fish!",
},
{
    tip: "Talk to the fishies.",
},
{
    tip:"Check the water tempature daily.",
}
]

export const useTips = () => {
    return tipCollection.slice();
}