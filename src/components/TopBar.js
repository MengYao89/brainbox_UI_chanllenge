import "../index.scss";
import search from "../../assets/svg/search.svg";
import { useState, useEffect } from "react";

const Topbar = () => {
  const [isShow, setIsShow] = useState(false);
  const [int, setInp] = useState("");
  const handleShow = () => {
    setIsShow(true);
  };
  const onInput = (e) => {
    setInp(e.target.value);
  };

  <div className="nav">
    <img src={search} onClick={handleShow} className="search" alt="" />
    {isShow && (
      <input onInput={onInput} className="inp" type="text" name="" id="" />
    )}
    <div className="nav_btn" onClick={() => callback(2)}>
      Explore
    </div>
    <div className="nav_btn" onClick={() => callback(3)}>
      Stories
    </div>
  </div>;
};

export default Topbar;
