import React from 'react';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../components/firebase/firebaseConfig";
import MessageSuccess from "./MessageSuccess";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const styles = {
    containerShop: {
        textAlign: 'center',
        paddingTop: 20,
    },
    FormContainer: {
        display: 'flexbox',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
};

const initialState = {
    name: '',
    phone: '',
    mail: '',
};

const Form = () => {

    const cartContext = useContext(CartContext);
    const [buyer,setbuyer] = useState(initialState);
    const [purchaseID,setpurchaseID] = useState('');

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setbuyer({ ...buyer, [name]: value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db,'purchases'), {
            buyer, producto: cartContext.cart, cantidadItems: cartContext.getTotalQuantity(),precioTotal: cartContext.getTotalPrice(),
        });
        setpurchaseID(docRef.id);
        setbuyer(initialState);
    }

    return (
        <div style={styles.containerShop}>
            <h1>Form</h1>
            <form style={styles.FormContainer} onSubmit={onSubmit}>
                <TextField 
                placeholder='Name'
                style={{ margin:10, width: 400}}
                value={buyer.name}
                name='name'
                onChange={handleOnChange}
                />
                <TextField 
                placeholder='Phone'
                style={{ margin:10, width: 400}}
                value={buyer.phone}
                name='phone'
                onChange={handleOnChange}
                />
                <TextField 
                placeholder='Mail'
                style={{ margin:10, width: 400}}
                value={buyer.mail}
                name='mail'
                onChange={handleOnChange}
                />
                <button className='btnASendAction'>Send</button>
            </form>
            {purchaseID && <MessageSuccess purchaseID={purchaseID}/>}
        </div>
    )
}

export default Form;
