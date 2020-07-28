import React from 'react';

const BestDeals = function(props){
  if(props.food[0]==='...loading'){
    return(
      <div></div>
    )
  }else{
    console.log(props.food)
    var arr = props.food;
    for(var i =0;i<arr.length;i++){
      var discount=Math.round(100-(100*(Math.round(arr[i].price)/Math.round(arr[i].originalPrice))))
      arr[i]['discount']=discount;
    }
    var discountArr =arr.slice();
    for(var j=0;j<discountArr.length;j++){
      for(var k =j;k<discountArr.length;k++){
        if(Number(discountArr[j].discount)<Number(discountArr[k].discount)){
          var temp= discountArr[j];
          discountArr[j]=discountArr[k]
          discountArr[k]=temp;

        }
      }
    }
    console.log(discountArr);

    return(
      <div className="best-deals-container">
        <div className='best-deals-title'>
          <div className="best-title-container">
            <p>BEST SCRAP DEALS OF THE DAY</p>
          </div>
        </div>
        <div className="best-deals-nav">
          <div className="grid-deal">
            <div className="percentage">
              <p>DISCOUNT</p>
              <p className="discount-text">{discountArr[0].discount}%</p>
            </div>
            <div className="best-deal-description">
                <ul>
                  <li>{discountArr[0].restaurantName}</li>
                  <li>{discountArr[0].foodName}</li>
                  <li>${discountArr[0].originalPrice}</li>
                  <li>${discountArr[0].price}</li>
                </ul>
            </div>
            <div>
              <button className="deal-buy" onClick={(event)=> props.scrapBought(event,discountArr[0])}>BUY</button>
            </div>
            <div className="best-deal-image">
                 <img className="deal-img"src={discountArr[0].imageUrl}/>
            </div>
          </div>
          <div className="grid-deal">
            <div className="percentage">
                <p>DISCOUNT</p>
                <p className="discount-text">{discountArr[1].discount}%</p>
              </div>
              <div className="best-deal-description">
                  <ul>
                    <li>{discountArr[1].restaurantName}</li>
                    <li>{discountArr[1].foodName}</li>
                    <li>${discountArr[1].originalPrice}</li>
                    <li>${discountArr[1].price}</li>
                  </ul>
              </div>
              <div>
                <button className="deal-buy" onClick={(event)=> props.scrapBought(event,discountArr[1])}>BUY</button>
              </div>
              <div className="best-deal-image">
                  <img className="deal-img"src={discountArr[1].imageUrl}/>
              </div>
          </div>
          <div className="grid-deal">
            <div className="percentage">
                  <p>DISCOUNT</p>
                  <p className="discount-text">{discountArr[2].discount}%</p>
                </div>
                <div className="best-deal-description">
                    <ul>
                      <li>{discountArr[2].restaurantName}</li>
                      <li>{discountArr[2].foodName}</li>
                      <li>${discountArr[2].originalPrice}</li>
                      <li>${discountArr[2].price}</li>
                    </ul>
                </div>
                <div>
                  <button className="deal-buy" onClick={(event)=> props.scrapBought(event,discountArr[2])}>BUY</button>
                </div>
                <div className="best-deal-image">
                    <img className="deal-img"src={discountArr[2].imageUrl}/>
              </div>
          </div>
          <div className="grid-deal">
              <div className="percentage">
                  <p>DISCOUNT</p>
                  <p className="discount-text">{discountArr[3].discount}%</p>
                </div>
                <div className="best-deal-description">
                    <ul>
                      <li>{discountArr[3].restaurantName}</li>
                      <li>{discountArr[3].foodName}</li>
                      <li>${discountArr[3].originalPrice}</li>
                      <li>${discountArr[3].price}</li>
                    </ul>
                </div>
                <div>
                  <button className="deal-buy" onClick={(event)=> props.scrapBought(event,discountArr[3])}>BUY</button>
                </div>
                <div className="best-deal-image">
                    <img className="deal-img"src={discountArr[3].imageUrl}/>
                </div>
            </div>
        </div>
      </div>
    )
  }

}



export default BestDeals;