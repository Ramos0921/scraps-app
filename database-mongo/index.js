//require('dotenv').config();
var mongoose = require('mongoose')
var ObjectId = require('mongodb').ObjectID;

var url = process.env.DB||'mongodb://localhost/scraps';


mongoose.connect(url,{ useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open', function() {
  console.log('Database connected successfully');
});

var food = mongoose.Schema({
  restaurantName: String,
  foodName: String,
  ingredients: String,
  originalPrice:Number,
  price: Number,
  imageUrl:String,
  time:Number,
});

var newFood = mongoose.model('food', food);


var save = function(foodItem,callback){
  console.log(foodItem)
  var newFoodItem = new newFood();
  newFoodItem.restaurantName= foodItem.restaurantName;
  newFoodItem.foodName = foodItem.foodName;
  newFoodItem.ingredients= foodItem.ingredients;
  newFoodItem.price = foodItem.price;
  newFoodItem.imageUrl = foodItem.imageUrl;
  newFoodItem.time= foodItem.time;
  newFoodItem.originalPrice = foodItem.originalPrice;

  newFoodItem.save()
    .then((data)=>{
      callback(null,data)
    })
    .catch((err)=>{
      callback(err,null)
    })
}

var selectAll = function(callback) {
  newFood.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var deleteOne = function(delId, callback){
  newFood.deleteOne({"_id": ObjectId(delId)})
    .then((data)=>{
      callback(null,data);
    })
    .catch((err)=>{
      callback(err,null);
    })
}

var updateOne = function(obj,callback){
  const upId = obj._id;
  const newPrice = obj.price;
  newFood.updateOne({_id:upId},{price:newPrice})
    .then((data)=>{
      callback(null,data)
    })
    .catch((err)=>{
      callback(err,null);
    })
}

module.exports.updateOne= updateOne;
module.exports.deleteOne= deleteOne;
module.exports.save = save;
module.exports.selectAll = selectAll;