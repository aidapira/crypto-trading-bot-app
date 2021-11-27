import React from 'react';
import { TextField } from '@material-ui/core';
import '../content/customFields.css';

class InputField extends React.Component {
    render() {
        const { value, label, name, placeholder, type, onChange } = this.props

        return <div className="custom-input">
            {label && <label htmlFor="input-field" className="input-label">{label}</label>}
            <TextField
                id="filled-basic"
                label={placeholder}
                variant="filled"
                type={type}
                value={value}
                name={name}
                className="form-control"
                onChange={onChange}
            />
        </div>;
    }
}

export default InputField;