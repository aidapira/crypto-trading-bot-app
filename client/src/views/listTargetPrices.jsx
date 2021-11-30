import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';


class ListTargetPrices extends React.Component {

    render() {
        return <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {
                this.props.targetPrices.map(targetPrice => {
                    return <ListItem
                        key={targetPrice._id}
                        disableGutters
                    >
                        <ListItemText
                            primary={`A target price to ${targetPrice.type} ${targetPrice.size} BTC-USD at $${targetPrice.price} was placed.`}
                        />
                    </ListItem>
                })
            }
        </List>
    }
}
export default ListTargetPrices;