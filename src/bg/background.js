console.log('background running')

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

  if (changeInfo.status == 'complete' && tab.active) {
    

        			

		console.log("Events reset");
		// Send to popup
		chrome.runtime.sendMessage(
		{subject: 'reset'}
		)

  }
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "startFunc") {
        		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            let activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {"message": "get_data"});
            console.log('Background: pop-up click received')

        })
    }
})

chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
  	if (msg.subject === 'sendHeadline') {

	    // Enable the page-action for the requesting tab.
	    console.log('headline recieved')
	    console.log(msg.headline_text)


	    let to_api = {"headline": msg.headline_text, 
	                   "article": msg.article_text
	               };

	    console.log(to_api)

		// summarize and send back
		const api_url = 'https://us-central1-debiaser.cloudfunctions.net/return_suggested_articles';

		fetch(api_url, {
	  			method: 'POST',
	  			body: JSON.stringify(to_api),
	  			headers:{'Content-Type': 'application/json'} 
	  			})
		.then(r => r.text())
	 	.then(function(result) {
			 //   console.log('charities found')
			  console.log('articles found')
	 		  console.log(result)	
	 		  result_json = JSON.parse(result);
	 		  console.log(result_json)


	 		  	// Send to popup
				chrome.runtime.sendMessage(
				{subject: 'sendArticles',
				message: result_json}
			);
	 		})
	       
	       
	  }

  });

