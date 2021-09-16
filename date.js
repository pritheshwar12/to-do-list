//jshint esversion:6

module.exports.getDate=getDate;


function getDate(){
const today = new Date();
const options={
  weekday:"long",
  day:"numeric",
  month:"long"

}

const day=today.toLocaleDateString("en-us",options);
return day;
}

//we can use directly without module keyword
//using anonymous function
//binding function to a variable
exports.getDay=function(){
const today = new Date();
const options={
  weekday:"long",
}


return today.toLocaleDateString("en-us",options);;
};
