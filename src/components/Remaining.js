import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    // eslint-disable-next-line
   // const alertType = totalExpenses > budget ? 'alert-danger' : '';//Código Inútil Cartel rojo no esiste pariente
    return (
        <div className={`alert alert-success`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;