// Import stylesheets
import './style.css';



function sortSearchIndex(arr,num){
  var z = arr.sort();
  console.log( z);
  return z.indexOf(num);

}


var result = sortSearchIndex([1,5,8,0,9,7] , 9);
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML =  result;


