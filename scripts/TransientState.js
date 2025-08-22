//Set up the transient state data structure and provide initial values
const transientState = {
    metal: null,
    carats: 0,
    style: null
}

// Functions to modify each property of transient state
export const setMetal = (chosenMetal, metalPrice) => {
    transientState.metal = chosenMetal
    transientState.price = metalPrice
    console.log(transientState)
}


export const setCarats = (chosenCarats, sizePrice) => {
    transientState.carats = chosenCarats
    transientState.price = transientState.price + sizePrice
    console.log(transientState)
}

export const setStyle = (chosenStyle, stylePrice) => {
    transientState.style = chosenStyle
    transientState.price = parseFloat((transientState.price + stylePrice).toFixed(2))
    console.log(transientState)
}

export const placeOrder = async () => {
    if((!transientState.metal) && (!transientState.carats) && (!transientState.style)) {
        //Window alert for customer to complete the selections if nothing was selected
        window.alert("Please complete the form!")
    } else {
        //Create the options for fetch()
        const postOrders = {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        //Send the data to the API
        const response = await fetch("http://localhost:8088/orders", postOrders)

        //Dispatch a custom event when the submission is complete
        const newOrderEvent = new CustomEvent("newOrderPlaced")
        document.dispatchEvent(newOrderEvent)
        transientState.metal = null
        transientState.carats = 0
        transientState.style = null
    }
}
