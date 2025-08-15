export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders = await fetchResponse.json()

    let ordersHTML = orders.map(
        (order) => {
            return `
                <section class="orders-placed-container">
                    <p>Order #${order.id}</p>
                </section>
            `
        }
    )
    const html = ordersHTML.join("")
    return html
}