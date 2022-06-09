import React from 'react';
import { Alert } from '@mui/material';
//import { Stack } from '@mui/material/Stack';

const MessageSuccess = ({ purchaseID }) => {
    return (
            <Alert severity="success">Gracias por su compra! Su ID de transaccion es: {purchaseID}</Alert>
    );
};

export default MessageSuccess;