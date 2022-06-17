import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdwnAdd from "./components/DropdwnAdd";
import PaymentSuccess from "./components/PaymentSuccess";
// import { useContext} from "react";
// import { userContext } from "./components/DropdwnAdd";
import style from "./Payment.module.css";




const Payment = () => {
  // const newData = useContext(userContext)
  // console.log(newData);

  const [show, setState]=useState(false);
  const inpChange= (e)=>{
    if(e.target.value===null){
      alert("please fill the inputs")
    }
    else{
      setState(true)
    }
  }

  const handleClick=()=>{
    setState(true)
  }


  const data = JSON.parse(localStorage.getItem("user"));
  const d=data.plan
  // console.log(d);
  
  let pr = d.price.split('').map(Number);
  pr.shift()
  let prc= pr.join("")
  console.log(prc);



  const navigate= useNavigate();

  const handleSuscribe=()=>{
    navigate('/PaymentSuccess')
  }
  return (
    <>
      <div className={style.main_bx}>


      {/* --------------left side box--------------- */}

        <div className={style.leftMain_Bx}>

          <div style={style.l_Logo_Bx}>
            <img
              className={style.pic}
              src="https://d1wqzb5bdbcre6.cloudfront.net/8c362dcde478842886a67b93643f08fd88d3b4242eb0c0e66bafb9c755e1745e/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878515756476445784961305979546c6c6e65475a6b66475a6662476c325a56393265465a43553246745a304e694e33425265565a4a54573931556d78694d6e593030336b647a76444754"
              alt=""
            />
          </div>
          <div className={style.head1}>
            <p className={style.topStyle}>Subscribe to {d.title} - v2 (Annual)</p>
            <p className={style.clr}>${prc*12}.00 <span className={style.span1}>per year</span> </p>
          </div>
          <div className={style.opt}>
          <div className={style.opt1}>
            <span className={style.span2}>{d.title} - v2 (Annual)</span>
            <span className={style.span2}>$ {prc*12}.00</span>
          </div>
            <span style={{fontSize:"12px"}}>Billed yearly</span>
          </div>

          <div>
          <div className={style.opt1}>
            <span className={style.span2}>Subtotal</span>
            <span className={style.span2}>$ {prc*12}.00</span>
          </div>
          <hr style={{marginTop:"15px",marginBottom:"15px"}}/>

          <div className={style.opt1}>
            <span>Tax</span>
            <span>$0.00</span>
          </div>
          <hr style={{marginTop:"15px", marginBottom:"15px"}}/>

          <div className={style.opt1}>
            <span className={style.span2}>Total due today</span>
            <span className={style.span2}>${prc*12}.00</span>
          </div>

          </div>

          </div>

          <p className={style.Pstyles}></p>


          {/* <-----------------right side box-----------------> */}


        <div className={style.rightMain_Bx}>

        <div className={style.span2 + " " + style.margin}>Pay with card</div>
        <div className={style.emailSet_Bx+ " " + style.margin}>
        <div className={style.emailSet}>
          <div style={{width:"100px"}}>Email</div>
          <div className={style.clrBlck}>arnavmania@gmail.com</div>
        </div>
        </div>


        {/* <------------ card information------------------> */}


        <div className={style.mainInp_Bx}>
          <span>Card information</span>
          <div>
            <input onChange ={inpChange} className={style.cardInpTop +" " +style.inpBx_size} placeholder="1234 1234 1234 1234" type='text' maxLength={16} required/>
          </div>
          <div className={style.inpFlex_Bx}>
          <div>
            <input onChange ={inpChange} className={style.inpBx_size1 + " " + style.cardInpBtm} placeholder="MM/YY" required/>
          </div>

          <div>
            <input onChange ={inpChange} className={style.inpBx_size1} placeholder="CVC" maxLength={3} required/>
          </div>

          </div>
          
        </div>



        <div className={style.margin}>
        <span>Name on card</span>
        <input onChange ={inpChange}style={{borderRadius:"07px"}} className={style.inpBx_size} required/>
        </div>


        {/* -------------Billing address------------ */}

        <div className= {style.margin}>
        <div>
        <span>Billing address</span>
        <br/>

          <select className={style.slctStyle + " " + style.inpBx_size1} style={{height:"36px"}}>
            <option>Country</option>
            <option>India</option>
            <option>Japan</option>
            <option>U.S.A</option>
            <option>Austria</option>
            <option>Russia</option>
            <option>Saudi Arabia</option>
            <option>Nepal</option>
            <option>Algeria</option>
            <option>China</option>
            <option>Mongolia</option>
            <option>Australia</option>
            <option>New zeland</option>
            <option>Bhutan</option>
            <option>France</option>
            <option>Germany</option>
            <option>South Africa</option>
            <option>Sri Lanka</option>
            <option>Afganisthan</option>
            <option>Ukrain</option>
            <option>Poland</option>
            <option>Switerzeland</option>
            <option>South Koria</option>
            <option>Malasia</option>
            <option>Myanmar</option>
            <option>Bangladesh</option>
            <option>Canada</option>
            <option>Indonesia</option>
            <option>Turkey</option>
            <option>Uganda</option>
          </select>

          <input onChange ={inpChange} className={style.inpBx_size + " " + style.cardInpBtm} placeholder='Address' required/>
        </div>
    {
  show? '' : <span className={style.uDropDwn} onClick={handleClick}>Enter address manually</span>
          }
       
       <div>
       {
        show? <DropdwnAdd />: " "

       
       }
       </div>
        </div>

        {/* <----------input-checkbox-------------> */}

        <div style={{marginBottom:"30px"}}>

          <input type="checkbox" />
          <span style={{color:"rgba(26,26,26,.9)"}}>Save my info for secure 1-click checkout</span>
          <div style={{fontSize:"14px"}}>Pay faster on Lumen5 Technologies Ltd and thousands of sites.</div>

        </div>

        <div className={style.btn}><p className={style.btnC} 
       onClick={handleSuscribe}>Subscribe</p></div>

        <div style={{marginTop:"15px",fontSize:"13px", color:"#1A1A1A99"}}>By confirming your subscription, you allow Lumen5 Technologies Ltd to charge your card for this payment and future payments in <span style={{marginLeft:"110px"}}>accordance with their terms.</span></div> 

        </div>
        </div>

      {/* <PaymentSuccess/> */}
    </>
  );
};

export {Payment};
