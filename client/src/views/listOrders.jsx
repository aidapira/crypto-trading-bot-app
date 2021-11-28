import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { getOrderStatus } from '../controllers/fetchOrderStatus';
class ListOrders extends React.Component {


    render() {
        const { onClose, selectedValue, open } = this.props;
        const handleClose = () => {
            onClose(selectedValue);
        };
        return <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    this.props.orders.map(order => {
                        return <ListItem
                            key={order.orderID}
                            disableGutters
                            onClick={(e) => getOrderStatus(order.orderID, e)}
                        >
                            <ListItemText
                                primary={`An order to ${order.type} ${order.size} BTC-USD at $${order.price} was placed.`}
                            />
                        </ListItem>
                    })
                }
            </List>

        </div>
    }
}
export default ListOrders;