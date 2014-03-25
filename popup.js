

var bookminder = {

	getTitle: function(url){
		var addrField = document.getElementById("addr");
		
		addrField.value = url;
	},
	

	setup: function(){
		chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs) {
			var url = tabs[0].url;
			bookminder.getTitle(url);
			});	
	}
	


};

document.addEventListener('DOMContentLoaded', function () {
  bookminder.setup();
});
