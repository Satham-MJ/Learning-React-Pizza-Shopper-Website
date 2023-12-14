import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="desciptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          expedita aut fuga ipsa sed illum cupiditate, illo maiores maxime
          consequuntur, quibusdam suscipit unde delectus, architecto debitis
          autem ipsam! Debitis, exercitationem.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
