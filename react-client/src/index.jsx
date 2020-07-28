import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import axios from 'axios';
import Form from './components/Form.jsx'
import DeteteForm from './components/DeleteForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.addScrap= this.addScrap.bind(this);
    this.scrapBought=this.scrapBought.bind(this);
    this.updateScrap=this.updateScrap.bind(this);
    this.deleteScrap=this.deleteScrap.bind(this);
  }

  componentDidMount() {
    var url = window.location.href.split('');
    url.pop();
    var newUrl= url.join('')
    console.log(newUrl)
    axios.get(newUrl+'scraps')
      .then((data)=>{
        this.setState({
          items: data.data,
        })
      })
      .catch((e)=>{
        console.log(e);
      })
  }
  deleteScrap(item){
    if(confirm(`Please confirm that you want to delete ${item.foodName} from ${item.restaurantName}. Press okay if your would like to continue.`))
    {
      var url = window.location.href.split('');
      url.pop();
      var newUrl= url.join('')
      axios.delete(newUrl+`scraps/:${item._id}`)
      .then((data)=>{
        alert(`Your Scrap has been deleted from our board.`)
        var url = window.location.href.split('');
        url.pop();
        var newUrl= url.join('')
        axios.get(url+'scraps')
        .then((data)=>{
          this.setState({
            items: data.data,
          })
         })
        .catch((e)=>{
          console.log(e);
        })
      })
      .catch((err)=>
      {
        alert('An error occured please confirm you entered the correct Scarp confirmation number.')
        console.log(err);
      })

    }else{
      alert(`Your request has been cancled!`)
    }

  }
  updateScrap(item){
    if(confirm(`${item.restaurantName} are you sure you want to update the current price on Scrap item number ${item.confirmationNumber} to $${item.newPrice}? Press okay if you wish to continue.`)){
      var obj ={
        _id:item.confirmationNumber,
        price:Number(item.newPrice),
      }
      var url = window.location.href.split('');
      url.pop();
      var newUrl= url.join('')
      axios.put(newUrl+'scraps',obj)
        .then((data)=>{
          alert(`The price on Scrap time ${item.confirmationNumber} has been updated to ${item.newPrice}. Please confirm that our board refelcts your update. Again thank for choosing Scraps!`)
          var url = window.location.href.split('');
          url.pop();
          var newUrl= url.join('')
          axios.get(newUrl+'scraps')
            .then((data)=>{
              this.setState({
                items: data.data,
              })
            })
            .catch((err)=>{
              console.log(err);
            })
        })
        .catch((err)=>{
          alert(`Item number ${item.confirmationNumber} is not a valid number please try a differnt number.`)
          console.log(err);
        })
    }else{
      alert('Your update request has been cancled.')
    }
  }

  scrapBought(event,item){
    event.preventDefault();
    if(confirm(`Thank you for choosing Scraps! Please confirm your purchase of ${item.foodName} from ${item.restaurantName}. Press okay if your order is correct. A confirmation number will be provided shortly.`))
    {
      var url = window.location.href.split('');
      url.pop();
      var newUrl= url.join('')
      axios.delete(newUrl+`scraps/:${item._id}`)
      .then((data)=>{
        alert(`Thank you for your Scraps purchase. Your confirmation number is: ${item._id}. When picking up your order simply show your purchase confirmation number to the restaurant cashier and the rest is taken care of. HAPPY SCRAPPING! Hope to see you soon!`)
        var url = window.location.href.split('');
        url.pop();
        var newUrl= url.join('')
        axios.get(newUrl+'scraps')
        .then((data)=>{
          this.setState({
            items: data.data,
          })
         })
        .catch((e)=>{
          console.log(e);
        })
      })
      .catch((err)=>
      {
        console.log(err);
      })

    }else{
      alert(`Your order for ${item.foodName} from ${item.restaurantName} has been cancelled. Please continue shopping!`)
    }

  }

  addScrap(scrap){
    var url = window.location.href.split('');
    url.pop();
    var newUrl= url.join('')
    axios.post(newUrl+'scraps',scrap)
      .then((data)=>{
        var info = data.data
        var newLine = "\r\n"
        var msg =`${info.restaurantName} thank you for posting your Scrap with us! Your ${info.foodName} has been added to our board.`;
        msg+=newLine;
        msg+= `Please save this confirmation number: ${info._id}`;
        msg+=newLine;
        msg+=`If you need to update or delete your item simply use your confirmation. Again Thank you!`
        alert(msg);
        var newItem = this.state.items;
        newItem.push(data.data);
        this.setState({
          items:newItem,
        })
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  render () {
    return (
    <div>
      <div className='appNameContainer'>
        <p className='appName'>SCRAPS</p>
          <img className='logo' src="https://scraps.s3-us-west-1.amazonaws.com/Screen+Shot+2020-07-26+at+12.57.27+PM.png"/>
      </div>
      <List items={this.state.items} scrapBought={this.scrapBought}/>
      <Form addScrap ={this.addScrap}/>
      <div className="update-delete-container">
        <div className="item-grid">
          <div className="update-title">
            <div className="update-text">
              <p>UPDATE PRICE ON YOUR SCRAP</p>
            </div>
          </div>
          <div className="update-form-container">
            <UpdateForm updateScrap={this.updateScrap}/>
          </div>
        </div>
        <div className="item-grid">
          <div className="delete-title">
            <div className="delete-text">
              <p>DELETE YOUR SCRAP</p>
            </div>
          </div>
          <div className="delete-form-container">
              <DeteteForm deleteScrap={this.deleteScrap}/>
          </div>
        </div>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));