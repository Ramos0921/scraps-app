import React from 'react';

class UpdateForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      restaurantName:'',
      confirmationNumber:'',
      newPrice:'',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.id]:event.target.value,
    })
  }
  handleUpdate(event){
    event.preventDefault();
    this.props.updateScrap(this.state);
    this.setState({
      restaurantName:'',
      confirmationNumber:'',
      newPrice:'',
    })

  }

  render(){
    return(
      <div className="update-form-holder">
        <form className="update-form" onSubmit={this.handleUpdate}>
          <p>
            Restaurant Name: {' '}
            <input type='text' id='restaurantName' onChange={this.handleChange} value={this.state.restaurantName}/>
          </p>
          <p>
            Confirmation Number: {' '}
            <input type='text' id='confirmationNumber' onChange={this.handleChange} value={this.state.confirmationNumber}/>
          </p>
          <p>
            New Price $: {' '}
            <input type='number' id='newPrice' onChange={this.handleChange} value={this.state.newPrice}/>
          </p>
          <div className="update-button-container">
            <button type="submit" className="update-button">UPDATE SCRAP</button>
          </div>
        </form>
      </div>
    )
  }
}


export default UpdateForm;