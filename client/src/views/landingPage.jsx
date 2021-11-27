import React from 'react';
import TradingForm from './tradingForm';
import ListOrders from './listOrders';
import { fetchOrders } from '../controllers/fetchOrders';
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
            <ListOrders orders={this.state.orders} />
        </div>;
    }
}
 
export default LandingPage;