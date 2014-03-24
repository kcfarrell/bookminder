

var bookminder = {

	getTitle: function(tabs){
		var addrField = document.getElementById("addr");
		
		addrField.value = url;
	},
	

	setup: function(){
	chrome.tabs.query({'active': true,'lastFocusedWindow': true}, function (tabs)
		       	{
    var url = tabs[0].url;
    this.getTitle();
});	
	}
	


};

// Run our puppy generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  bookminder.setup();
});
