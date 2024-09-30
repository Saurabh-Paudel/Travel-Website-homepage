import React from "react";
import Axon from "../images/Axon.png";
import Jetstar from "../images/Jetstar.png";
import Expedia from "../images/Expedia.png";
import Qantas from "../images/Qantas.png";
import Alitalia from "../images/Alitalia.png";
export default function Company() {
  return (
    <div className="flex items-center justify-center">
      <ul className="hidden lg:flex flex-wrap justify-center items-center gap-6 lg:gap-[70px]">
        <li>
          <img src={Axon} alt="Axon Logo" className="w-24 lg:w-auto" />
        </li>
        <li>
          <img src={Jetstar} alt="Jetstar Logo" className="w-24 lg:w-auto" />
        </li>
        <li>
          <img src={Expedia} alt="Expedia Logo" className="w-24 lg:w-auto" />
        </li>
        <li>
          <img src={Qantas} alt="Qantas Logo" className="w-24 lg:w-auto" />
        </li>
        <li>
          <img src={Alitalia} alt="Alitalia Logo" className="w-24 lg:w-auto" />
        </li>
      </ul>
    </div>
  );
}
