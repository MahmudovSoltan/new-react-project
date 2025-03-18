import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import logo from "../../assets/pexels-photo-846741.jpeg";
const HeaderNotes = () => {
  return (
    <div>
      <ul className="notes_links">
        <li>
          <IoMdMail size={36} color="#ffff" />
          <span className="count">0</span>
        </li>
        <li>
          <FaBell size={36} color="#ffff" />
          <span className="count">0</span>
        </li>
        <li>
          <img
            width={50}
            height={50}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            src={logo}
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default HeaderNotes;
