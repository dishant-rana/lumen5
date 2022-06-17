import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "../Payment.module.css"

const PaymentSuccess = () => {

    const navigate= useNavigate();

    const handleClick=()=>{
        navigate('/')
    }
  return (
    <>
        <div className={style.paySuccss}>
            <img src='https://colombocme.org/wp-content/uploads/2019/03/Paymentsuccessful21.png' alt='error loading image'
                className={style.paySuccss}
            />
       
        <button className={style.btnSuccess} onClick={handleClick}>Continue Shopping</button>
        </div>
    </>
  )
}

export default PaymentSuccess;