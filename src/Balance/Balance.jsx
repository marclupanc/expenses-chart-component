import React from "react";
import "./styles.css";
import { ReactComponent as Logo } from "../logo.svg";

export default function Balance() {
  return (
    <div>
      <div className="container">
        <div className="content">
          <p>My balance</p>
          <div className="sum">$921.48</div>
          <div className="logo">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}
