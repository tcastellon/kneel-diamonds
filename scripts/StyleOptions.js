export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let optionsHTML = ``

    //Using a for..of loop to generate radio buttons for each style option and add to optionsHTML
    // for (const style of styles) {
    //     optionsHTML += `
    //         <input type="radio" name="style" value="${style.id}"/> ${style.style}
    //     `
    // }

    //Using map() to generate a new array of strings
    const divStringArray = styles.map(
        (style) => {
            return `<div>
                <input type="radio" name="style" value="${style.id}"/> ${style.style}
            </div>`
        }
    )
    //Joins the array of strings into a single string
    optionsHTML += divStringArray.join("")
    
    return optionsHTML
}