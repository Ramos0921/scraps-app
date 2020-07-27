import React from 'react';
class DeleteForm extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="delete-form-holder">
        <form className="delete-form">
          <p>
            Restaurant Name: {' '}
            <input type='text' id='restaurantName'/>
          </p>
          <p>
            Scrap Name: {' '}
            <input type='text' id='scrapName'/>
          </p>
          <p>
            Confirmation Number: {' '}
            <input type='number' id='confirmationNumber'/>
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