//Set up the transient state data structure and provide initial values
const transientState = {
    metal: "",
    carats: 0,
    style: ""
}

// Functions to modify each property of transient state
export const setMetal = (chosenMetal) => {
    transientState.metal = chosenMetal
    console.log(transientState)
}


export const setCarats = (chosenCarats) => {
    transientState.carats = chosenCarats
    console.log(transientState)
}

export const setStyle = (chosenStyle) => {
    transientState.style = chosenStyle
    console.log(transientState)
}
