import React from 'react';
import TradingForm from './tradingForm';
import ListOrders from './listOrders';
import ListTargetPrices from './listTargetPrices';
import { fetchTargetPrices } from '../controllers/fetchTargetPrices';
import { fetchOrders } from '../controllers/fetchOrders';
import Box from '@material-ui/core/Box';
import '../content/landingPage.css';
import { placeOrder } from '../controllers/placeOrder';

class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            targetPrices: [],
            orders: []
        }
    }

    async componentDidMount() {
        let ordersResponse = await fetchOrders()
        let targetPriceResponse = await fetchTargetPrices()
        this.interval = setInterval(async() =>
            placeOrder(await fetchTargetPrices())
        , 60000);
        this.setState({ orders: ordersResponse, targetPrices: targetPriceResponse })
    }

    render() {
        return <div className="landing-page-wrapper">
            <TradingForm />
            <Box sx={{ width: '100%', maxWidth: 460, border: 'dashed 1px grey', marginTop: '20px', padding: '5px' }}>
                <ListTargetPrices targetPrices={this.state.targetPrices} />
            </Box>
            <Box sx={{ width: '100%', maxWidth: 460, border: 'dashed 1px grey', marginTop: '20px', padding: '5px' }}>
                <ListOrders orders={this.state.orders} />
            </Box>
        </div>;
    }
}

export default LandingPage;