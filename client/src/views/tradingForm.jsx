import React from 'react';
import InputField from "./inputField"
import SelectField from './selectFied';
import { Button } from "@material-ui/core"
import { FormControl } from "@material-ui/core";
import { setTargetPrice } from '../controllers/setTargetPrice';

class TradingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price_limit: "",
            volume: "",
            transaction_type: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState((state, props) => (
            { [name]: value }
        ));
    }

    render() {
        let optionArray = [{ id: '1', value: 'buy' }, { id: '2', value: 'sell' }];
        return <div>
            <FormControl>
                <InputField
                    name="price_limit"
                    value={this.state.price_limit}
                    label="Limit price"
                    placeholder="Price.."
                    onChange={this.handleChange} />
                <InputField
                    name="volume"
                    value={this.state.volume}
                    label="Volume"
                    placeholder="Volume.."
                    onChange={this.handleChange} />
                <SelectField
                    name="transaction_type"
                    arrayOfData={optionArray}
                    value={this.state.transaction_type}
                    label="Transaction type"
                    firstOption="Transaction Type"
                    onChange={this.handleChange}
                /><br />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => setTargetPrice(this.state, e)}
                >
                    Set Target Price
                </Button>
            </FormControl>
        </div>;
    }
}

export default TradingForm;