export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let optionsHTML = `
        <div class="size-input">
    `

    //Generate radio buttons for each size option and add to optionsHTML
    for (const size of sizes) {
        optionsHTML += `
            <input type="radio" name="size" value="${size.id}"/> ${size.carets}
        `
    }

    optionsHTML += `
        </div>
    `
    return optionsHTML
}