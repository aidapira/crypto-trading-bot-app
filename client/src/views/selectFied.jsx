import { Component } from 'react';
import Select from "@material-ui/core/Select";

class SelectField extends Component {
    render() {
        const { value, name, firstOption, onChange } = this.props
        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) => <option key={data.id} value={data.value} > {data.value} </option>);
        return (
            <Select
                native
                value={value}
                name={name}
                onChange={onChange}
            >
                {firstOption && <option>{firstOption}</option>}
                {options}
            </Select>
        )
    }
}



export default SelectField;

