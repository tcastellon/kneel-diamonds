import { setCarats } from "./TransientState.js"

const handleCaratsChoice = (event) => {
    if(event.target.name === "size") {
        setCarats(parseFloat(event.target.value))
    }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleCaratsChoice)

    let optionsHTML = ``

    
    //Using map() to generate a new array of strings
    const divStringArray = sizes.map(
        (size) => {
            return `<div>
            <input type="radio" name="size" value="${size.carats}"/> ${size.carats}ct
            </div>`
        }
    )
    //Joins the array of strings into a single string
    optionsHTML += divStringArray.join("")
    
    return optionsHTML
}


//Using a for..of loop to generate radio buttons for each size option and add to optionsHTML
// for (const size of sizes) {
//     optionsHTML += `
//         <input type="radio" name="size" value="${size.id}"/> ${size.carets}ct
//     `
// }