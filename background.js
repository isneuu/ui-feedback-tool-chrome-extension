
chrome.browserAction.onClicked.addListener(function (tab) {
    
 


    chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});




	//anylitics

var parseVar = window.localStorage.userid;
var uniqueID = Date.now();
if(parseVar){
  var userid = parseVar;
  console.log('any-');
}else{
    window.localStorage.userid = uniqueID;
  var userid = uniqueID;
}
console.log(userid);
const options = {
  method: 'POST',
  headers: {Accept: 'text/plain', 'Content-Type': 'application/x-www-form-urlencoded'},
  body: new URLSearchParams({
    data: '{\n  "event": "Opened",\n  "properties": {\n    "distinct_id": '+ userid +',\n    "token": "ceb3b2b7dc015ce092bb38eecdab3514"\n  }\n}\n'
  })
};

fetch('https://api.mixpanel.com/track#live-event', options)
  .then(response => response.json())
  .then(response => console.log(''))
  .catch(err => console.error(err));




});