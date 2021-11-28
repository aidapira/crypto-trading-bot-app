
interface OrderInputs {
    price_limit: number,
    volume: number,
    transaction_type: string
}

export const onFormSubmit = (state: OrderInputs, evt: any)=>{
    const price_limit = state.price_limit;
    const volume = state.volume;
    const type = state.transaction_type;

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
          price: price_limit,
          size: volume,
          product_id: 'BTC-USD',
          client_oid: '496ffbba-7dae-4864-f7e8-a5bf52c6d0e2',
          stop_price: '1'
        })
      };
      
      fetch('/place-order', options)
        .then(response => response.json())
        .then(response => console.log('respp===>>', response))
        .catch(err => console.error('er==>>>', err));
}



