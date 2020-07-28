import React from 'react';
import ListItem from './ListItem.jsx';

const List = function (props){
  return(
      <div className="foodReadyContainer">
        <div className="ScrapsTogo">
          <div className="ready-text">
            <p>Scraps Ready To-go </p>
          </div>
        </div>
        <div className="itemsContainer">
          <nav className="itemList">
            { props.items.map((item,key) => <ListItem item={item} key ={key} scrapBought={props.scrapBought}/>)}
          </nav>
        </div>
      </div>
    )
  }

export default List;