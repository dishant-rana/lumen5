import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Pricing.module.css";

const Pricing = () => {
  const [price1, setPrice1] = useState("$59");
  const [price2, setPrice2] = useState("$149");
  const [discount, setDiscount] = useState("Save 25%");
  const [upto, setUpto] = useState("");
  const [subtime, setSubtime] = useState("per month, billed yearly");

  const amountChangeHandler2 = () => {
    setPrice1("$59");
    setPrice2("$119");
    setDiscount("Save 25%");
    setUpto("");
    setSubtime("per month, billed yearly");
  };
  const amountChangeHandler1 = () => {
    setPrice1("$79");
    setPrice2("$199");
    setDiscount("");
    setUpto("Up to 25% off");
    setSubtime("per month");
  };

  const navigate = useNavigate();
  return (
    <div className={style.ultraIntegratorDiv}>
      <div>
        <p className={style.title}>PRICING</p>
      </div>
      <div className={style.subheading}>
        <h1>Plans for your video content creation strategy</h1>
      </div>
      <div className={style.togglediv_main}>
        <div className={style.togglediv}>
          {price1 == "$79" ? (
            <div>
              <div
                style={{ background: "rgb(66, 66, 66)", color: "white" }}
                onClick={() => {
                  amountChangeHandler1();
                }}
              >
                Bill Monthly
              </div>
              <div onClick={amountChangeHandler2}>Bill Yearly</div>
            </div>
          ) : (
            <div>
              <div
                onClick={() => {
                  amountChangeHandler1();
                }}
              >
                Bill Monthly
              </div>
              <div
                style={{ background: "rgb(66, 66, 66)", color: "white" }}
                onClick={amountChangeHandler2}
              >
                Bill Yearly
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className={style.upto}>{upto}</p>
      </div>
      <div className={style.plans_div}>
        <div className={style.plans_inner_div}>
          <h2>Community</h2>
          <p>For casual video enthusiasts</p>
          <h1>$0</h1>
          <p>forever free</p>
          <button>Get started</button>
        </div>
        <div className={style.plans_inner_div}>
          <h2>Starter</h2>
          <p>For individual content creators</p>
          <h1>
            {price1} <span>USD</span>
          </h1>
          <p>{subtime}</p>
          <p className={style.discount}>{discount}</p>
          <button
            onClick={() => {
              let data = JSON.parse(localStorage.getItem("user"));
              data = {
                ...data,
                plan: {
                  title: "starter",
                  price: price1,
                  period: subtime === "per month" ? "per month" : "per year"
                }
              };
              localStorage.setItem("user", JSON.stringify(data));
              navigate("/payment");
            }}
          >
            Get started
          </button>
        </div>
        <div className={style.plans_inner_div}>
          <h2>Professional</h2>
          <p>For professional video storytellers</p>
          <h1>
            {price2} <span>USD</span>
          </h1>
          <p>{subtime}</p>
          <p className={style.discount}>{discount}</p>
          <button
            onClick={() => {
              let data = JSON.parse(localStorage.getItem("user"));
              data = {
                ...data,
                plan: {
                  title: "professional",
                  price: price2,
                  period: subtime === "per month" ? "per month" : "per year"
                }
              };
              localStorage.setItem("user", JSON.stringify(data));
              navigate("/payment");
            }}
          >
            Get started
          </button>
        </div>
        <div className={style.plans_inner_div}>
          <h2>Enterprise</h2>
          <p>For large-scale video teams</p>
          <h1>Custom</h1>
          <p className={style.blank}>{subtime}</p>
          <button>Learn more</button>
        </div>
      </div>
      <div className={style.plan_div}>
        <div>
          <h5>What's included:</h5>
          <p>✔️ Unlimited videos</p>
          <p>✔️ Contains Lumen5 watermark</p>
          <p>✔️ 720p video resolution</p>
        </div>
        <div>
          <h5>Everything in Free, plus:</h5>
          <p>✔️ No Lumen5 branding</p>
          <p>✔️ 15M stock photos & videos</p>
          <p>✔️ Custom colors & styles</p>
          <p>✔️ 1080p video resolution</p>
          <p>✔️ Access to icons</p>
        </div>
        <div>
          <h5>Everything in Starter, plus:</h5>
          <p>✔️ Full Shutterstock libraries</p>
          <p>✔️ Upload watermarks & font</p>
          <p>✔️ Multiple saved templates</p>
        </div>
        <div>
          <h5>Everything in Professional, plus:</h5>
          <p>✔️ Lumen5 design team</p>
          <p>✔️ Bespoke branded templates</p>
          <p>✔️ Dedicated customer success</p>
          <p>✔️ Teams & collaboration</p>
          <p>✔️ Enterprise-level security</p>
        </div>
      </div>
      <div>
        <h3 className={style.over_6_million}>
          Over 6 million videos created by thousands of businesses
        </h3>
      </div>
      <div className={style.compareplan_div}>
        <div>
          <button className={style.complare_plans_button}>Compare plans</button>
        </div>
        <div className={style.or_div}>or</div>
        <div>
          <button className={style.get_started_today_button}>
            Get started today
          </button>
        </div>
      </div>
      <div className={style.users_container}>
        <div>
          <div className={style.user_img_div}>
            <img
              src="https://storage.googleapis.com/lumen5-site-images/comment-darren.png"
              alt=""
            />
          </div>
          <div>
            <p className={style.user_dis}>
              "A member from our ProBlogger group created a video using Lumen5
              and published it on Facebook. In 24 hours the video got 300,000
              views, just using this little tool."
            </p>
          </div>
          <div>
            <p className={style.username}>DARREN ROWSE</p>
          </div>
        </div>
        <div>
          <div className={style.user_img_div}>
            <img
              src="https://storage.googleapis.com/lumen5-site-images/comment-nicholas.png"
              alt=""
            />
          </div>
          <div>
            <p className={style.user_dis}>
              "By using Lumen5, we increased our Facebook engagements by 448%,
              and boosted our reach dramatically. Our page grew from 5,000 to
              23,000 likes within a week!"
            </p>
          </div>
          <div>
            <p className={style.username}>NICHOLAS YANG</p>
          </div>
        </div>
        <div>
          <div className={style.user_img_div}>
            <img
              src="https://storage.googleapis.com/lumen5-site-images/comment-tova.png"
              alt=""
            />
          </div>
          <div>
            <p className={style.user_dis}>
              "My first video already got over 650,000 views on my facebook
              page. It is an amazing program and I’m really impressed! It made
              converting a blog post into a video so easy."
            </p>
          </div>
          <div>
            <p className={style.username}>TOVA LEIGH</p>
          </div>
        </div>
        <div>
          <div className={style.user_img_div}>
            {" "}
            <img
              src="https://storage.googleapis.com/lumen5-site-images/comment-lauren.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <p className={style.user_dis}>
              "I created a video using an older blog post and it's been a huge
              hit! Great way to freshen up and share things again—170,000 views
              and climbing!"
            </p>
          </div>
          <div>
            <p className={style.username}>LAUREN CASPER</p>
          </div>
        </div>
        <div>
          <div className={style.user_img_div}>
            {" "}
            <img
              src="https://storage.googleapis.com/lumen5-site-images/comment-steve.png"
              alt=""
            />
          </div>
          <div>
            {" "}
            <p className={style.user_dis}>
              "Lumen5 is fantastic! I made a video and now it has gone viral! It
              has 22,000 views from a reach of 65,000. No advertising. No
              promotion."
            </p>
          </div>
          <div>
            <p className={style.username}>STEVE LAST</p>
          </div>
        </div>
        <div>
          <div className={style.user_img_div}>
            <img
              src="https://storage.googleapis.com/lumen5-site-images/comment-kaylene.png"
              alt=""
            />
          </div>
          <div>
            <p className={style.user_dis}>
              "My Lumen5 video went viral with over3 million reach and it grew
              my page from 1500 to 5000 likes! I’m making these for all my top
              posts."
            </p>
          </div>
          <div>
            <p className={style.username}>KAYLENE GEORGE</p>
          </div>
        </div>
      </div>
      <div className={style.chooseplan_container}>
        <div>
          <h2 className={style.choose_the_plan}>
            Choose the plan that's right for you
          </h2>
        </div>
        <div className={style.plans_container_2}>
          <div>
            <h3 className={style.plan_heading}>Community</h3>
            <p className={style.discription}>forever free</p>
            <button className={style.plan_button}>Get Started</button>
          </div>
          <div>
            <h3 className={style.plan_heading}>Starter</h3>
            <p className={style.discription}>$79 USD/month</p>
            <button className={style.plan_button}>Get Started</button>
          </div>
          <div>
            <h3 className={style.plan_heading}>Professional</h3>
            <p className={style.discription}>$199 USD/month</p>
            <button className={style.plan_button}>Get Started</button>
          </div>
          <div>
            <h3 className={style.plan_heading}>Enterprise</h3>
            <p className={style.discription}>Let's talk!</p>
            <button className={style.plan_button}>Learn More</button>
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div>
          {/* space for table */}
          <div>
            <h3 className={style.packName}>Usage</h3>
          </div>
          <div>
            <table className={style.table}>
              <tr>
                <th>Video per month</th>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <th>Saved templates</th>
                <td>1</td>
                <td>1</td>
                <td>3</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th>Saved templates</th>
                <td>1</td>
                <td>1</td>
                <td>3</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th>Saved templates</th>
                <td>1</td>
                <td>1</td>
                <td>10</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th>Saved templates</th>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th>Saved templates</th>
                <td>0</td>
                <td>1</td>
                <td>3</td>
                <td>Custom</td>
              </tr>
              <tr>
                <th>Saved templates</th>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>✔️</td>
              </tr>
            </table>
          </div>
          <div>
            <div>
              <h3 className={style.packName}>Rendering</h3>
            </div>
            <div>
              <table className={style.table}>
                <tr>
                  <th>Resolution</th>
                  <td>720p</td>
                  <td>1080p</td>
                  <td>1080p</td>
                  <td>1080p</td>
                </tr>
                <tr>
                  <th>Landscape</th>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Square</th>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Vertical</th>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
              </table>
            </div>
            <div>
              <h3 className={style.packName}>Branding</h3>
            </div>
            <div>
              <table className={style.table}>
                <tr>
                  <th>Branded outro</th>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Popular templates</th>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Custom outro</th>
                  <td>—</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Custom fonts</th>
                  <td>—</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Custom colors</th>
                  <td>—</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Watermark upload</th>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Upload your own fonts</th>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Custom templates</th>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <div>
              <h3 className={style.packName}>Media</h3>
            </div>
            <div>
              <table className={style.table}>
                <tr>
                  <th>Millions of free-to-use videos and images</th>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Upload your own videos & photos</th>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Upload your own audio tracks</th>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Unlimited premium media</th>
                  <td>—</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Exclusive media marketplace</th>
                  <td>—</td>
                  <td>—</td>
                  <td>25/month</td>
                  <td>Custom</td>
                </tr>
                <tr>
                  <th>Record your own voiceover</th>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Icons</th>
                  <td>—</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Upload your own custom icons</th>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <div>
              <h3 className={style.packName}>Team management</h3>
            </div>
            <div>
              <table className={style.table}>
                <tr>
                  <th>Brand management</th>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Team permissions</th>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Workspace management</th>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Two-factor authentication</th>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Single sign-on</th>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <div>
              <h3 className={style.packName}>Support</h3>
            </div>
            <div>
              <table className={style.table}>
                <tr>
                  <th>Help center access</th>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Team permissions</th>
                  <td>—</td>
                  <td>✔️</td>
                  <td>✔️</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Customized support</th>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                </tr>
                <tr>
                  <th>Invoiced billing</th>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                  <td>✔️</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className={style.ques_main_div}>
        <div>
          <h3 className={style.frequently}>A few frequently asked questions</h3>
        </div>
        <div className={style.question_div1}>
          <div>
            <p>What if I only need Lumen5 for a set amount of time?</p>
            <p>That's fine! You can cancel your account anytime.</p>
          </div>
          <div>
            <p>What happens to my videos if I cancel?</p>
            <p>All the videos you create are yours to keep forever and ever.</p>
          </div>
        </div>
        <div className={style.question_div2}>
          <div>
            <p>Do you have a non-profit discount?</p>
            <p>We do. Contact us for more information.</p>
          </div>
          <div>
            <p>How do I pay for my plan?</p>
            <p>
              You can pay with Visa, Mastercard, and American Express. All
              prices are in USD. Invoiced billing is available on the Enterprise
              plan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Pricing };
