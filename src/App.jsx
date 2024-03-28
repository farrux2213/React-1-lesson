import { Component } from "react";
import "./App.css";
import bicon from "/bicon.svg";
import dashes from "/dashes.svg";
import ellipse from "/ellipse.svg";
import line from "/line.svg";
import srcicon from "/src.svg";
import shopicon from "/shop.svg";
import usericon from "/user.svg";
import quloqchinred from "/quloqchinred.svg";
import lineprice from "/lineprice.svg";
import left from "/left.svg";
import right from "/right.svg";
import leftimg from "/leftimg.svg";
import middleimg from "/middle.svg";
import rightimg from "/rightimg.svg";

class Figma extends Component {
  render() {
    return (
      <div className="Hero-area">
        <div className="Navegation">
          <div className="b-icon">
            <img src={bicon} />
          </div>
          <div className="s-p-u">
            <div className="src">
              <img src={ellipse} />
              <img src={srcicon} className="srcicon" />
            </div>
            <div className="line1">
              <img src={line} />
            </div>
            <div className="shop">
              <img src={ellipse} />
              <img src={shopicon} className="shopicon" />
            </div>
            <div className="line2">
              <img src={line} />
            </div>
            <div className="user">
              <img src={ellipse} />
              <img src={usericon} className="usericon" />
            </div>
          </div>
          <div className="dashes">
            <img src={dashes} />
          </div>
        </div>
        <div className="quloqchinNarxi">
          <div className="imgquloqchin">
            <img src={quloqchinred} className="quloqchinred" />
          </div>
          <div className="sotibolish">
            <div className="feel">
              <h2>Hear it. Feel it</h2>
            </div>
            <div className="music">
              <h1>Move with the music</h1>
            </div>
            <div className="price">
              <div className="now-price">
                <h1>$ 435</h1>
              </div>
              <div className="lineprice">
                <img src={lineprice} />
              </div>
              <div className="old-price">
                <s className="sh1">
                  <h1>$ 465</h1>
                </s>
              </div>
            </div>
            <div className="buy">
              <div>
                <h1>BUY NOW</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="clour">
          <h1>Our Latest colour collection 2021</h1>
          <div className="clourBottom">
            <div className="left">
              <img src={left} />
            </div>
            <div className="sony1">
              <img src={leftimg} />
            </div>
            <div className="sony2">
              <img src={middleimg} />
            </div>
            <div className="sony3">
              <img src={rightimg} />
            </div>
            <div className="right">
              <img src={right} />
            </div>
          </div>
        </div>
        <div className="feature"></div>
      </div>
    );
  }
}

export { Figma };
