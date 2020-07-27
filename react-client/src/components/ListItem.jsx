import React from 'react';

const ListItem =function (props)
{
  return(
    <div className="scrap-container">
      <div className="image-container">
        <img className="food-image"src={props.item.imageUrl}/>
      </div>
      <div className="scrap-description">
        <ul>
          <li>Restaurant:  {props.item.restaurantName}</li>
          <li>Scrap:  {props.item.foodName}</li>
          <li>Ingredients:  {props.item.ingredients}</li>
          <li>Time Prepared:  {props.item.time}</li>
          <li>Menu Price:  ${props.item.originalPrice}</li>
          <li>Scraps Price:  ${props.item.price}</li>
          <li>Scraps Discount:  {Math.round(100-(100*(Math.round(props.item.price)/Math.round(props.item.originalPrice))))}%</li>
        </ul>
        <div className="buttion-container">
          <button className="button-buy" onClick={(event)=> props.scrapBought(event,props.item)}>BUY SCRAP</button>
        </div>
      </div>
    </div>
  )
}

export default ListItem;