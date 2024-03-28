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
import featureimg from "/feature.svg";
import iconbbm from "/iconbbm.svg";
import iconbbmbottom from "/iconbbmbottom.svg";
import iconbbmin from "/iconbbmin.svg";
import baterryicon from "/baterryicon.svg";
import bluetoothicon from "/bluetoothicon.svg";
import microphoneicon from "/microphoneicon.svg";
import notalar from "/notalar.svg";
import ovozicon1 from "/ovozicon1.svg";
import ovozicon2 from "/ovozicon2.svg";
import backred from "/backred.svg";
import backblue from "/backblue.svg";
import backgreen from "/backgreen.svg";
import boxingimg from "/boxingimg.svg";
import noname from "/noname1.svg";
import line1 from "/line1.svg";
import noname2 from "/noname2.svg";
import noname3 from "/noname3.svg";
import noname4 from "/noname4.svg";
import vektor from "/vektor.svg";

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
        <div className="feature">
          <div className="featureLeft">
            <div className="featureText">
              <h1>Good headphones and loud music is all you need</h1>
            </div>
            <div className="bbm">
              <div className="baterry">
                <div className="baterryIcon">
                  <img src={iconbbm} />
                  <img src={iconbbmbottom} id="f1" />
                  <img src={iconbbmin} id="f2" />
                  <img src={baterryicon} id="f3" />
                </div>
                <div className="baterryText">
                  <p className="baterryText1">Battery</p>
                  <p className="baterryText2">Battery 6.2V-AAC codec</p>
                  <p className="baterryText3">Lern More</p>
                </div>
              </div>
              <div className="bluetooth">
                <div className="bluetoothIcon">
                  <img src={iconbbm} />
                  <img src={iconbbmbottom} id="f1" />
                  <img src={iconbbmin} id="f2" />
                  <img src={bluetoothicon} id="f3" />
                </div>
                <div className="bluetoothText">
                  <p className="baterryText1">Bluetooth</p>
                  <p className="baterryText2">Battery 6.2V-AAC codec</p>
                  <p className="baterryText3">Lern More</p>
                </div>
              </div>
              <div className="microphone">
                <div className="microphoneIcon">
                  <img src={iconbbm} />
                  <img src={iconbbmbottom} id="f1" />
                  <img src={iconbbmin} id="f2" />
                  <img src={microphoneicon} id="f3" />
                </div>
                <div className="microphoneText">
                  <p className="baterryText1">Microphone</p>
                  <p className="baterryText2">Battery 6.2V-AAC codec</p>
                  <p className="baterryText3">Lern More</p>
                </div>
              </div>
            </div>
          </div>
          <div className="featureRight">
            <img src={featureimg} id="f4" />
            <img src={notalar} id="notalar" />
            <img src={ovozicon1} id="f5" />
            <img src={ovozicon2} id="f6" />
          </div>
        </div>
        <div className="product">
          <h1>Our Latest Product</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            facilisis nunc ipsum aliquam, ante.{" "}
          </p>
          <div className="rbg">
            <div className="redHearphone">
              <div className="redHearphone1">
                <img src={backred} id="f7" />
              </div>
              <div className="redHearphone2"></div>
            </div>
            <div className="blueHearphone">
              <div className="blueHearphone1">
                <img src={backblue} />
              </div>
              <div className="blueHearphone2"></div>
            </div>
            <div className="greenHearphone">
              <div className="greenHearphone1">
                <img src={backgreen} />
              </div>
              <div className="greenHearphone2"></div>
            </div>
          </div>
        </div>
        <div className="boxing">
          <div className="boxingLeft">
            <img src={boxingimg} />
          </div>
          <div className="boxingRight">
            <h1>Whatever you get in the box</h1>
            <div id="kategoriya">
              <img src={noname} id="f7" />
              <img src={line1} />
              <img src={noname2} id="f8" />
              <img src={vektor} id="vektor" />
              <img src={line1} />
              <img src={noname3} id="f9" />
              <img src={line1} />
              <img src={noname4} id="f10" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Figma };
