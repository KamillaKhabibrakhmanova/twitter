var _ = require("underscore");
 
var data = [];
 
module.exports = {
  push: function(name, text){
    data.push({
      "name": name,
      "text": text,
      "id": data.length
    })
  },
  shift: function(name, text){
    data.unshift({
      "name": name,
      "text": text,
      "id": data.length
    })
  },
  list: function(){
    return data;
  },
  find: function(properties){
    return _.where(data, properties);
  }
}


var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
 
var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};
 
var getFakeTweet = function() {
  // console.log('got to getFakeTweet');
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

var getFakeImage = function() {
  // console.log('we got to getFakeImg');
  //var images = ["test", "test1", "test3"];
  var images = ['/images/image1.jpg','/images/image2.jpg','/images/image3.jpg','/images/image4.jpg','./public/images/image5.jpg'];
  return randArrayEl(images);
  //return images;
};
 
for(var i=0; i<10; i++) {
  module.exports.push(getFakeName(), getFakeTweet(), getFakeImage());
}