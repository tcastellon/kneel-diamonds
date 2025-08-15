export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let optionsHTML = `
        <div class="metal-input">
    `

    //Generate radio buttons for each metal option and add to optionsHTML
    for (const metal of metals) {
        optionsHTML += `
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        `
    }

    optionsHTML += `
        </div>
    `
    return optionsHTML
}