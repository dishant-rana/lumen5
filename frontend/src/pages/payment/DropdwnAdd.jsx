import React from "react";
// import {createContext} from 'react'
// import Payment from '../Payment'
import style from "./Payment.module.css";

// export const userContext = createContext()

const DropdwnAdd = () => {
  return (
    <>
      {/* const data = <DropdwnAdd/> */}

      <div className={style.margin}>
        <input className={style.inpBx_size} placeholder="Address line 2" />
        <div className={style.inpFlex_Bx}>
          <div>
            <input className={style.inpBx_size1} placeholder="City" />
          </div>

          <div>
            <input className={style.inpBx_size1} placeholder="PIN" />
          </div>
        </div>
        <div>
          <select
            className={style.slctStyle + " " + style.inpBx_size1}
            style={{ height: "36px" }}
          >
            <option value="" className={style.frstOpt}>
              State
            </option>
            <option>Bihar</option>
            <option>Jharkhand</option>
            <option>West Bengal</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>Assam</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Karnakata</option>
            <option>Andra Pradesh</option>
            <option>Mizoram</option>
            <option>Sikkim</option>
            <option>Delhi</option>
            <option>Goa</option>
            <option>Telangana</option>
            <option>Orrisa</option>
            <option>Maharastra</option>
            <option>Gujrat</option>
            <option>Laddakh</option>
            <option>Punjab</option>
            <option>Haryana</option>
            <option>Arunachal Pradesh</option>
            <option>Tripura</option>
            <option>Meghalaya</option>
            <option>Nagaland</option>
            <option>J & K</option>
            <option>Himachal Pradesh</option>
            <option>Rajesthan</option>
            <option>Chhatisgarh</option>
            <option>Madhya Pradesh</option>
            <option>Chandigarh</option>
            <option>Lakshadweep</option>
            <option>Andaman & Nicobar</option>
            <option>Dadra & Nagar Haweli</option>
          </select>
        </div>
      </div>

      {/* <userContext.Provider value>
        <Payment />
    </userContext.Provider> */}
    </>
  );
};

export default DropdwnAdd;
