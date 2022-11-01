import "../../index.scss";
import "./help.scss";
import search from "../../assets/svg/search.svg";
import arrow from "../../assets/svg/arrow-up-right.svg";
import { useState, useEffect } from "react";
const Help = ({ callback }) => {
  const [isShow, setIsShow] = useState(false);
  const [int, setInp] = useState("");
  const handleShow = () => {
    setIsShow(true);
  };
  const onInput = (e) => {
    setInp(e.target.value);
  };
  return (
    <>
      <div className="box">
        <div className="box_left">
          <div className="nav">
            <img src={search} onClick={handleShow} className="search" alt="" />

            {isShow && (
              <input
                onInput={onInput}
                className="inp"
                type="text"
                name=""
                id=""
              />
            )}
            <div className="nav_btn" onClick={() => callback(2)}>
              Explore
            </div>
            <div className="nav_btn" onClick={() => callback(3)}>
              Stories
            </div>
          </div>
          <div className="box_content">
            {int ? (
              <div className="box_txt">No result</div>
            ) : (
              <>
                <div className="box_title">Help</div>
                <div className="box_txt">FAQ and Support</div>
              </>
            )}
            <div className="sub_btn" onClick={() => callback(1)}>
              Return
            </div>
          </div>
        </div>
        <div className="box_right">
          <div className="type_s type1" onClick={() => callback(2)}>
            <div>
              <img src={arrow} className="icon_top" alt="" />
            </div>
            <div className="div">
              <div className="type_s_title">Explore </div>
              <div>Expiore the best places deals</div>
            </div>
          </div>
          <div className="type2 type_s" onClick={() => callback(3)}>
            <div>
              <img src={arrow} className="icon_top" alt="" />
            </div>
            <div className="div">
              <div className="type_s_title">Stories </div>
              <div>Our customer and company stories </div>
            </div>
          </div>
          <div className="type3 type_s" onClick={() => callback(4)}>
            <div>
              <img src={arrow} className="icon_top" alt="" />
            </div>
            <div className="div">
              <div className="type_s_title">About </div>
              <div>Our company history</div>
            </div>
          </div>
          <div className="type4 type_s active" onClick={() => callback(5)}>
            <div>
              <img src={arrow} className="icon_top" alt="" />
            </div>
            <div className="div">
              <div className="type_s_title">Help </div>
              <div>FAQ and Support</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Help;
