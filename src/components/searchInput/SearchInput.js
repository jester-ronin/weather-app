import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCity } from '../../Redux/actions';
import './searchInput.css'
import Button from 'react-bootstrap/Button';


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchInput = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue)
        dispatch(setCity(inputValue))
    }

    return (
        <div>
            <InputGroup size="lg">
                <InputGroup.Text id="inputGroup-sizing-lg">Your city </InputGroup.Text>
                <Form.Control
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </InputGroup>
            <Button onClick={handleSubmit} variant="warning">Добавить</Button>
        </div>
    );
};

export default SearchInput;
