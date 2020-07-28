import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props)
    this.state={
      restaurantName:'',
      foodName:'',
      ingredients:'',
      originalPrice:'',
      price:'',
      imageUrl:'',
      time:'',
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleAdd=this.handleAdd.bind(this);
  }

  handleChange(event)
  {
    this.setState({
      [event.target.id]:event.target.value,
    })
  }
  handleAdd(event){
    event.preventDefault();
    this.props.addScrap(this.state);
    this.setState({
      restaurantName:'',
      foodName:'',
      ingredients:'',
      originalPrice:'',
      price:'',
      imageUrl:'',
      time:'',
    })
  }


  render(){
    return(
      <div className="form-container">
          <div className="form-title-container">
            <div className="form-title-text">
              <p>RESTAURANTS ADD SCRAPS BELOW</p>
            </div>
          </div>
          <form className="new-form" onSubmit={this.handleAdd}>
            <p>
              Restaurant Name: {' '}
              <input type='text' id='restaurantName' onChange={this.handleChange} value={this.state.restaurantName}/>
            </p>
            <p>
              Food Name: {' '}
              <input type='text' id='foodName' onChange={this.handleChange} value={this.state.foodName}/>
            </p>
            <p>
              Ingredients: {' '}
              <input type='text' id='ingredients' onChange={this.handleChange} value={this.state.ingredients}/>
            </p>
            <p>
              Menu Price $: {' '}
              <input type='number' min="0.00" step="0.01" id='originalPrice' onChange={this.handleChange} value={this.state.originalPrice}/>
            </p>
            <p>
              Scraps Price $: {' '}
              <input type='number' min="0.00" step="0.01" id='price' onChange={this.handleChange} value={this.state.price}/>
            </p>
            <p>
              Image Link (Use https://scraps.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-25+at+3.42.53+PM.png ) {' '}
              <input type='text' id='imageUrl' onChange={this.handleChange} value={this.state.imageUrl}/>
            </p>
            <p>
              Time Prepared (0000-2359) {' '}
              <input type='number' id='time' onChange={this.handleChange} value={this.state.time}/>
            </p>
            <p className="button-add-container">
              <button type="submit" className="add-button">ADD SCRAP</button>
            </p>
          </form>
      </div>
    )
  }
}

export default Form;