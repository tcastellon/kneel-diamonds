//Set up the transient state data structure and provide initial values
const transientState = {
    metal: null,
    carats: 0,
    style: null
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
        const newSubmissionEvent = new CustomEvent("newSubmissionCreated")
        document.dispatchEvent(newSubmissionEvent)
        
    }
}
