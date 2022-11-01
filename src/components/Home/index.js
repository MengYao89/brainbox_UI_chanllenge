import "../../index.scss";
import search from "../../assets/svg/search.svg";
import arrow from "../../assets/svg/arrow-up-right.svg";
import { useState, useEffect } from "react";
const Home = ({ callback }) => {
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
                <div className="box_title">
                  It's never too late to try something new
                </div>
                <div className="box_txt">
                  Three paths lead to knoaledge: the path of reflection is the
                  noblest, tha path of imitation is the easiest. and the path of
                  experience is the bitterest
                </div>
              </>
            )}
            <div className="sub_btn" onClick={() => callback(1)}>
              Book Now
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
          <div className="type4 type_s" onClick={() => callback(5)}>
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
export default Home;
