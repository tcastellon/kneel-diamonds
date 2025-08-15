import { setMetal } from "./TransientState.js"

const handleMetalChoice = (event) => {
    if(event.target.name === "metal") {
        setMetal(event.target.value)
    }
}

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChoice)

    let optionsHTML = ``

    
    //Using map() to generate a new array of strings
    const divStringArray = metals.map(
        (metal) => {
            return `<div>
            <input type="radio" name="metal" value="${metal.metal}" /> ${metal.metal}
            </div>`
        }
    )
    //Joins the array of strings into a single string
    optionsHTML += divStringArray.join("")
    
    return optionsHTML
}


//Using a for..of loop to generate radio buttons for each metal option and add to optionsHTML
// for (const metal of metals) {
//     optionsHTML += `
//         <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
//     `
// }