export const getOrderStatus = async (order_id: string, evt: any)=>{
    console.log('getting response')
    let response = await fetch('/order-status?order_id='+order_id)
    response = await response.json()
    console.log(response)
    alert('Your order status is '+response.status)
}