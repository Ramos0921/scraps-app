import React from 'react';
class DeleteForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      _id:'',
      foodName:'',
      restaurantName:'',
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }
  handleChange(event){
    this.setState({
      [event.target.id]:event.target.value,
    })
  }
  handleDelete(event){
    event.preventDefault();
    this.props.deleteScrap(this.state);
    this.setState({
      _id:'',
      foodName:'',
      restaurantName:'',
    })

  }

  render(){
    return(
      <div className="delete-form-holder">
        <form className="delete-form" onSubmit={this.handleDelete}>
          <p>
            Restaurant Name: {' '}
            <input type='text' id='restaurantName'onChange={this.handleChange} value={this.state.restaurantName}/>
          </p>
          <p>
            Scrap Name: {' '}
            <input type='text' id='foodName'onChange={this.handleChange} value={this.state.foodName}/>
          </p>
          <p>
            Confirmation Number: {' '}
            <input type='text' id='_id'onChange={this.handleChange} value={this.state._id}/>
          </p>
          <div className="delete-button-container">
            <button type="submit" className="delete-button">DELETE SCRAP</button>
          </div>
        </form>
      </div>
    )
  }



}


export default DeleteForm;