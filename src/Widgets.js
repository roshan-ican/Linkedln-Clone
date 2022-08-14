import React from "react"
import "./Widgets.css"
import InfoIcon from "@mui/icons-material/Info"
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedln News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Roshan is back", "Important News - 1 reader")}
      {newsArticle("Joan of Arc to be portrayed as nonbinary ", "Arc of Joan")}
      {newsArticle("Tesla hits new highs", "Cars and auto")}
    </div>
  )
}

export default Widgets
