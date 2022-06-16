import React from "react";
import style from "./Payment.module.css";

const Payment = () => {
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
            <p className={style.topStyle}>Subscribe to Starter - v2 (Annual)</p>
            <p className={style.clr}>
              $708.00 <span className={style.span1}>per year</span>{" "}
            </p>
          </div>
          <div className={style.opt}>
            <div className={style.opt1}>
              <span className={style.span2}>Starter - v2 (Annual)</span>
              <span className={style.span2}>$708.00</span>
            </div>
            <span>Billed yearly</span>
          </div>

          <div>
            <div className={style.opt1}>
              <span className={style.span2}>Subtotal</span>
              <span className={style.span2}>$708.00</span>
            </div>
            <hr />

            <div className={style.opt1}>
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <hr />

            <div className={style.opt1}>
              <span className={style.span2}>Total due today</span>
              <span className={style.span2}>$708.00</span>
            </div>
          </div>
        </div>

        {/* <-----------------right side box-----------------> */}

        <div className={style.rightMain_Bx}>
          <div className={style.span2 + " " + style.margin}>Pay with card</div>
          <div className={style.emailSet_Bx + " " + style.margin}>
            <div className={style.emailSet}>
              <div style={{ width: "100px" }}>Email</div>
              <div className={style.clrBlck}>arnavmania@gmail.com</div>
            </div>
          </div>
          <div className={style.mainInp_Bx + " " + style.margin}>
            <span>Card information</span>
            <div>
              <input
                className={style.cardInpTop + " " + style.inpBx_size}
                placeholder="1234 1234 1234 1234"
              />
            </div>
            <div className={style.inpFlex_Bx}>
              <div>
                <input
                  className={style.inpBx_size1 + " " + style.cardInpBtm}
                  placeholder="MM/YY"
                />
              </div>

              <div>
                <input className={style.inpBx_size1} placeholder="CVC" />
              </div>
            </div>
          </div>

          <div className={style.margin}>
            <span>Name on card</span>
            <input
              style={{ borderRadius: "07px" }}
              className={style.inpBx_size}
            />
          </div>

          {/* -------------Billing address------------ */}

          <div className={style.margin}>
            <div>
              <span>Billing address</span>
              <br />

              <select className={style.slctStyle + " " + style.inpBx_size1}>
                <option>India</option>
              </select>

              <input className={style.inpBx_size + " " + style.cardInpBtm} />
            </div>

            <span className={style.uDropDwn}>Enter address manually</span>
          </div>

          {/* <----------input-checkbox-------------> */}

          <div style={{ marginBottom: "30px" }}>
            <input type="checkbox" />
            <span style={{ color: "rgba(26,26,26,.9)" }}>
              Save my info for secure 1-click checkout
            </span>
            <div style={{ fontSize: "14px" }}>
              Pay faster on Lumen5 Technologies Ltd and thousands of sites.
            </div>
          </div>

          <div className={style.btn}>
            <p className={style.btnC}>Subscribe</p>
          </div>

          <div
            style={{ marginTop: "15px", fontSize: "13px", color: "#1A1A1A99" }}
          >
            By confirming your subscription, you allow Lumen5 Technologies Ltd
            to charge your card for this payment and future payments in{" "}
            <span style={{ marginLeft: "110px" }}>
              accordance with their terms.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export { Payment };
