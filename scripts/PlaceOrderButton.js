import { placeOrder } from "./TransientState.js"

const handleOrderSubmission = (clickEvent) => {
    if(clickEvent.target.id === "place-order-button") {
        placeOrder()
    }
}

export const SubmissionButton = () => {
    document.addEventListener("click", handleOrderSubmission)

    return `<button id='place-order-button'>Save Submission</button>`
}