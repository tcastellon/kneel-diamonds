const transientState = {
    style: "",
    carats: 0,
    metal: ""
}

export const setStyle = (chosenStyle) => {
    transientState.style = chosenStyle
}

export const setCarats = (chosenCarats) => {
    transientState.carats = chosenCarats
}

export const setMetal = (chosenMetal) => {
    transientState.metal = chosenMetal
}
