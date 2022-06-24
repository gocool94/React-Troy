import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

    const [ChangedTitle,SetTitle] = useState("");
    const [ChangedAmount,SetAmount] = useState("");
    const [ChangedDate,SetDate] = useState("");

    // const [userinput,setUserInput] = useState({
    //     ChangedTitle: '',
    //     ChangedAmount: '',
    //     ChangedDate:''
    // });


    const TitleChangeHandler = (event) =>{
    //    setUserInput({
    //     ...userinput,
    //     ChangedTitle: event.target.value,
    //    } 
    //    );

        SetTitle(event.target.value);
    }

    const AmountChanger = (event) =>{

        // setUserInput({
        //     ...userinput,
        //     ChangedAmount:event.target.value,
        // });
        SetAmount(event.target.value);
    }

    const Datechanger = (event) => {
        // setUserInput({
        //     ...userinput,
        //     ChangedDate: event.target.value,
        // });

        SetDate(event.target.value);
    }

    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title:ChangedTitle,
            amount: ChangedAmount,
            date: new Date(ChangedDate)
        };

        console.log(expenseData)

    }

    
return(
<form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={TitleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min="0.01" step = "0.01" onChange={AmountChanger}/>
        </div>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='date' min='2019-01-01' max='2022-12-3' onChange={Datechanger}/>
        </div>
    </div>
    <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>  
    </div>

</form>
);
}


export default ExpenseForm;