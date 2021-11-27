
export const fetchOrders = async () =>{
    const response = await fetch('/fetch-orders')
    return response.json()
}