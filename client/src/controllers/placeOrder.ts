
interface TargetPrice {
    price: number,
    size: number,
    type: string
}


export const placeOrder = async (targetPirce: Array<TargetPrice>) => {
    let response = await fetch('/get-currencies')
        .then(response => response.json())

    const BTC_current_price = response.BTC_current_price

    for(let i = 0; i<targetPirce.length; i++) {
        const price = targetPirce[i].price
        const size = targetPirce[i].size
        const type = targetPirce[i].type
        
        if((type == 'buy' && price <= BTC_current_price) || (type == 'sell' && price >= BTC_current_price)) {
            const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  profile_id: 'default profile_id',
                  type: 'limit',
                  side: type,
                  stp: 'dc',
                  stop: 'loss',
                  time_in_force: 'GTC',
                  cancel_after: 'min',
                  price: price,
                  size: size,
                  product_id: 'BTC-USD',
                  client_oid: '496ffbba-7dae-4864-f7e8-a5bf52c6d0e2',
                  stop_price: '1'
                })
            };
              
            await fetch('/place-order', options)
                .then(response => response.json())
                .catch(err => console.error('error', err));

            const data = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    price: price,
                    size: size,
                    type: type
                })
            }
            await fetch('/delete-target-price', data)
        }
    }

}