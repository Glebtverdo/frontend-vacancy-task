import { tokenType } from "../../types";
import {User, ChevronUp, ChevronDown} from "react-feather";
import "./tokensStyles.css"
import { useState } from "react";
import {NavLink} from "react-router-dom"
import PriceChange from "./PriceCange";

export default function TokenComp(params:{token :tokenType}){
  const {
    token: {
      name,
      users,
      description,
      id,
      logoURI,
      symbol,
      price,
      priceChange,
      volume,
      volumeChangePercentage,
      tvl,
      tvlChangePercentage}} = params;
  const [showDescription, setShowDescription] = useState(false)
  const priceChangeArr = [priceChange.hours24, priceChange.days7, priceChange.days365]
  const toggleShowDescription = () => setShowDescription(!showDescription);
  

  const styleForImg = {
    width: "40px",
		height: "40px",
		display: "flex",
    margin: "0 20px 0 24px", 
		backgroundImage: "url('" + logoURI + "')",
		backgroundRepeat: "no-repeat",
		backgroundSize: "100% 100%",
		
	}

  return<div className="tokensTableTrDiv">
    <div className="tokensTableDivContainer">
      <p style={{color:"#93949D"}} className="tokensTableP">#{id}</p>
      <div style={styleForImg}></div>
      <NavLink className=" uniWidth" style={{textDecoration: "none"}} to={"./" + id}>
          <p style={{fontSize: "21px"}} className="tokensTableP">{name}</p>
          <p style={{color: "#6347F5"}} className="tokensTableP">{symbol}</p>
      </NavLink>
      <div className=" uniWidth">
          <p style={{color: "#6347F5"}} className="tokensTableP uniWidth">{`${price} $`}</p>
          <p className="tokensTableP">
            {priceChangeArr.map((el, localId) => {
              <PriceChange key={el+id+localId} val={el} id={localId} /> })}
          </p>
      </div>
      <span className="tokensTableContainer uniWidth">
        <p className="tokensTableP">{`${volume} $`}</p>
        <p style={{color: "#6347F5"}} className="tokensTableP">{`${volumeChangePercentage} %`}</p>
      </span>
      <span className="tokensTableContainer uniWidth">
        <p className="tokensTableP">{`${tvl} $`}</p>
        <p style={{color: "#6347F5"}} className="tokensTableP">{`${tvlChangePercentage} %`}</p>
      </span>
      <span className="tokensTableContainer uniWidth">
        <User color="#6347F5"/>
        <p className="tokensTableP">{users}</p>
      </span>
      {showDescription && <ChevronUp onClick={toggleShowDescription} color="#6347F5"/>}
      {!showDescription && <ChevronDown onClick={toggleShowDescription} color="#6347F5"/>}
    </div>
    {showDescription && <p className="tokensTableP" style={{margin: "24px 0px"}}>{description}</p>}
  </div>
}