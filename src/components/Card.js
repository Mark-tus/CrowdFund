import React from "react";
import { Icon } from "@iconify/react";
import "./css/card.css";
export function Card(props) {
  const { title, desc, type, totalRaised, totalNeeded, daysLeft, totalDays } =
    props.campaign;
  return (
    <div className="Card rounded-5 p-3">
      <img
        src={`https://source.unsplash.com/random/180×270?${type.replace(' ',',')}`}
        alt="img"
        className="img-fluid cardImg rounded-4 mb-3"
      />
      <div className="info">
        <div className="campaignType fw-light fst-italic mb-1 text-secondary">
          <Icon icon="carbon:type-pattern" /> {type}
        </div>
        <p className="title fw-bold fs-5">
          <Icon icon="material-symbols:campaign-outline" /> {title}
        </p>
        <p className="description fw-normal">
          <Icon icon="fluent:text-description-20-filled" /> {desc}
        </p>
      </div>
      <div className="meta d-flex justify-content-around mb-2 text-center text-wrap">
        <div className="rasied d-flex flex-column align-items-center">
          <span className="d-flex align-items-center">
            <Icon icon="streamline:money-currency-bitcoin-circle-1-crypto-circle-payment-blockchain-finance-bitcoin-currency-money" />{" "}
            &nbsp; {totalRaised}
          </span>
          <span className="fw-light text-secondary">
            Raised of {totalNeeded}
          </span>
        </div>
        <div className="vl mx-1" />
        <div className="daysLeft d-flex flex-column align-items-center">
          <span>{daysLeft}</span>
          <span className="fw-light text-secondary">
            <Icon icon="material-symbols:timer-outline" /> Days Left /{" "}
            {totalDays}
          </span>
        </div>
      </div>
    </div>
  );
}
