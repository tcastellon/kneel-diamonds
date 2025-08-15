export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let html = `
        <div class="metal-input">
    `

    //Generate radio buttons for each metal option and add to html
    for (const metal of metals) {
        html += `
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}`
    }

    html += `
        </div>
    `
    return html
}