import React from "react";
import "../../../styles/sider";
import Popup from "../../popup/Popup";
import { useState } from 'react';


const Sider = () => {

  const[buttonPopup, setButtonPopup]= useState(false)
  return (
    <div className="sider">
      <div className="sider_category">
        <h3>Категория</h3>
        <span><select onClick={()=>{setButtonPopup(true)}}></select></span>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>My popup</h3>
          <p>This is my button triggered popup</p>
        </Popup>
        <p>
          <input type="checkbox" />
          Смартфоны<a> 774</a>
        </p>
        <p class="underline">
          <input type="checkbox" />
          Iphone<a> 124</a>
        </p>
      </div>
      <div className="sider_brand">
        <h3>Бренд</h3>
        <span><select onClick={()=>{setButtonPopup(true)}}></select></span>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>My popup</h3>
          <p>This is my button triggered popup</p>
        </Popup>
        <p>
          <input type="checkbox" />
          Samsung<a> 168</a>
        </p>
        <p>
          <input type="checkbox" />
          Apple<a> 124</a>
        </p>
        <p>
          <input type="checkbox" />
          Xiaomi<a> 102</a>
        </p>
        <p>
          <input type="checkbox" />
          Honor<a> 88</a>
        </p>
        <p>
          <input type="checkbox" />
          Huawei<a> 62</a>
        </p>
        <p className="siderBrandColorBlue">Показать ещё</p>
      </div>
      <div className="sider_price">
        <h3>Цена</h3>
        <span><select onClick={()=>{setButtonPopup(true)}}></select></span>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Popup</h3>
        </Popup>
        <span>
          <input type="text" class="siderPriceInputWidth" ></input> -- <input type="text" class="siderPriceInputWidth"></input>
        </span>
      </div>
    </div>
  );
};

export default Sider;
