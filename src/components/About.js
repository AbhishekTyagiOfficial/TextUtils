import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";

export default function About(props) {
  // const [mystyle, setstyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  let mystyle = {
    color: props.mode === "dark" ? "white" : "#392742",
    backgroundColor: props.mode === "dark" ? "#392742" : "white",
  };

  // const [btnText, setBtnText] = useState("Dark Mode");

  // const toggleMode = () => {
  //   if (mystyle.color == "white") {
  //     setBtnText("Dark mode");
  //     setstyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //   } else {
  //     setBtnText("Light Mode");
  //     setstyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //   }
  // };

  return (
    <>
      <div className="container rounded" style={mystyle}>
        <h3 className="my-4">About Us</h3>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={mystyle}
              >
                <strong>Accordion Item #1</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body " style={mystyle}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={mystyle}
              >
                <strong>Accordion Item #2</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={mystyle}
              >
                <strong>Accordion Item #3</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        {/* <button
          onClick={toggleMode}
          type="button"
          className="btn btn-primary my-3"
        >
          {btnText}
        </button> */}
        <Link to="robin">Robin</Link>
        <Link to="party">Party</Link>
        <Link to="shadhi">Shadhi</Link>
        <Outlet />
      </div>
    </>
  );
}
