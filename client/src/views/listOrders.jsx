import React from 'react';

class ListOrders extends React.Component {
    

    render() { 
        return <div>
            <ul>
            {
                this.props.orders.map(order=>{
                    return <li key={order.orderID}>An order to {order.type} {order.size} BTC-USD at ${order.price} was placed.</li>
                })
            }
            </ul>
        </div>;
    }
}
 
export default ListOrders;