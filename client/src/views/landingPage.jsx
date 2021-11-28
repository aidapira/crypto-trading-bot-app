import React from 'react';
import TradingForm from './tradingForm';
import ListOrders from './listOrders';
import { fetchOrders } from '../controllers/fetchOrders';
import Box from '@material-ui/core/Box';
import '../content/landingPage.css';

class LandingPage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            orders: []
        }
    }

    async componentDidMount(){
        const response = await fetchOrders()
        this.setState({orders: response })
        console.log('fetch orderrr==>>', response)
    }

    render() { 
        return <div className="landing-page-wrapper">
            <TradingForm />
            <Box sx={{ width: '100%', maxWidth: 360, border: 'dashed 1px grey', marginTop: '20px', padding: '5px' }}>
                <ListOrders orders={this.state.orders} />
            </Box>
        </div>;
    }
}
 
export default LandingPage;