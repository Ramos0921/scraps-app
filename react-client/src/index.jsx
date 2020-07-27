import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List.jsx';
import axios from 'axios';
import Form from './components/Form.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.addScrap= this.addScrap.bind(this);
    this.scrapBought=this.scrapBought.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/scraps')
      .then((data)=>{
        this.setState({
          items: data.data,
        })
      })
      .catch((e)=>{
        console.log(e);
      })
  }

  scrapBought(event,item){
    event.preventDefault();
    var id= item._id;
    console.log(id)
    axios.delete(`http://localhost:3000/scraps/:${item._id}`)
      .then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  addScrap(scrap){
    axios.post('http://localhost:3000/scraps',scrap)
      .then((data)=>{
        var info = data.data
        var newLine = "\r\n"
        var msg =`${info.restaurantName} thank you for posting your Scrap with us! Your ${info.foodName} has been added to our board.`;
        msg+=newLine;
        msg+= `Please save this confirmation number: ${info._id}`;
        msg+=newLine;
        msg+=`If you need to update or delete you item simply use your confirmation. Again Thank you!`
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
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));