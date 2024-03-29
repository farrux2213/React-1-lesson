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
import backredshop from "/backredshop.svg";
import backblueshop from "/backblueshop.svg";
import backgreenshop from "/backgreenshop.svg";
import redsony from "/redsony.svg";
import bluesony from "/bluesony.svg";
import greensony from "/greensony.svg";
import iconshop from "/iconshop.svg";
import starred from "/starred.svg";
import strelka from "/strelka.svg";
import nameline from "/nameline.svg";
import ctaimg from "/ctaimg.svg";
import orqafonnota from "/orqafonnota.svg";
import email from "/email.svg";
import end from "/end.svg";

class Figma extends Component {
  render() {
    return (
      <div className="all">
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
                  <img src={backred} className="f7" />
                  <img src={redsony} id="redsony" />
                  <img src={backredshop} id="backredshop" />
                  <img src={iconshop} id="iconshop1" />
                </div>
                <div className="redHearphone2">
                  <img src={starred} className="starred" />
                  <div className="four50">4.50</div>
                  <div className="dollor1">
                    <b>$256</b>
                  </div>
                  <div className="nomired">Read Headphone</div>
                </div>
              </div>
              <div className="blueHearphone">
                <div className="blueHearphone1">
                  <img src={backblue} />
                  <img src={bluesony} id="bluesony" />
                  <img src={backblueshop} id="backblueshop" />
                  <img src={iconshop} id="iconshop2" />
                </div>
                <div className="blueHearphone2">
                  <img src={starred} className="starred" />
                  <div className="four50">4.50</div>
                  <div className="dollor2">
                    <b>$235</b>
                  </div>
                  <div className="nomiblue">Blue Headphone</div>
                </div>
              </div>
              <div className="greenHearphone">
                <div className="greenHearphone1">
                  <img src={backgreen} />
                  <img src={greensony} id="greensony" />
                  <img src={backgreenshop} id="backgreenshop" />
                  <img src={iconshop} id="iconshop3" />
                </div>
                <div className="greenHearphone2">
                  <img src={starred} className="starred" />
                  <div className="four50">4.50</div>
                  <div className="dollor3">
                    <b>$245</b>
                  </div>
                  <div className="nomigreen">Green Headphone</div>
                </div>
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
                <div className="slow1">
                  <div className="slow1img">
                    <img src={strelka} />
                  </div>
                  <div className="slow1text">5A Charger</div>
                </div>
                <div className="slow2">
                  <img src={nameline} />
                </div>
                <div className="slow3">
                  <div className="slow1img">
                    <img src={strelka} />
                  </div>
                  <div className="slow1text">Extra battery</div>
                </div>
                <div className="slow4">
                  <img src={nameline} />
                </div>
                <div className="slow5">
                  <div className="slow1img">
                    <img src={strelka} />
                  </div>
                  <div className="slow1text">Sophisticated bag</div>
                </div>
                <div className="slow6">
                  <img src={nameline} />
                </div>
                <div className="slow7">
                  <div className="slow1img">
                    <img src={strelka} />
                  </div>
                  <div className="slow1text">User manual guide</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainCta">
            <div className="ctaimg">
              <img src={ctaimg} />
            </div>
            <div className="orqafonnota">
              <img src={orqafonnota} />
            </div>
            <img src={email} className="email" />
          </div>
          <div className="featureEnd">
            <div className="end">
              <img src={end} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { Figma };
