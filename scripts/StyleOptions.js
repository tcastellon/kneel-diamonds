export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let optionsHTML = `
        <div class="style-input">
    `

    //Generate radio buttons for each style option and add to optionsHTML
    for (const style of styles) {
        optionsHTML += `
            <input type="radio" name="style" value="${style.id}"/> ${style.style}
        `
    }

    optionsHTML += `
        </div>
    `
    return optionsHTML
}