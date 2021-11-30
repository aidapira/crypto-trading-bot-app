
interface OrderInputs {
    price_limit: number,
    volume: number,
    transaction_type: string
}

export const setTargetPrice = (state: OrderInputs, evt: any)=>{
    const price_limit = state.price_limit;
    const volume = state.volume;
    const type = state.transaction_type;

      const data = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            price_limit: price_limit,
            volume: volume,
            type: type
        })
      }

      fetch('/set-target-price', data) 
}



