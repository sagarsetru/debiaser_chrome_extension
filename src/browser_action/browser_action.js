
chrome.runtime.sendMessage({ "message" : "startFunc" });


chrome.runtime.onMessage.addListener((msg, sender) => {
	if (msg.subject === 'reset'){
		console.log("resetting popup")
	}
})

 

  chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
    if (msg.subject === 'sendArticles') {
        

		console.log('articles recieved')
		console.log(msg)

         // Get the event_list container
        let article_list = document.getElementById("article_list");

        // get the json output
        let articles_json = msg.message

        console.log(articles_json)

        let abcnews = articles_json['abcnews.go.com']

        var elmnt = document.createElement("div")
        elmnt.setAttribute("class", "newsOrg");

        // set the news org info
        var news_name = 'abcnews';
        var news_link = abcnews;

        console.log(news_name)
        console.log(news_link)

        // Change the header text
        document.getElementsByClassName('default')[0].innerHTML  = "Consider reading related articles from these news sources.";

        // Conatiner for name + dropdown
        var name = document.createElement("button");
        name.innerHTML = news_name;
        name.setAttribute("class", "name");

        // create a link to the relevant search
        var link = document.createElement("div");
        link.setAttribute("class", "link");

        var link_ref = document.createElement("a");
        // Open a blank tab when the link is clicked.
        link_ref.innerHTML = news_name;
        link_ref.setAttribute("target", "_blank");
        link_ref.setAttribute("href", 'https://'.concat(news_link));

        link.appendChild(link_ref)

        // Put the score and link to the element
        elmnt.appendChild(name);
        elmnt.appendChild(link);

        // Append the new element to the list.
        article_list.appendChild(elmnt);     

        let aljazeera = articles_json['aljazeera.com']
        let apnews = articles_json['apnews.com']
        let bbc = articles_json['bbc.com']
        let bloomberg = articles_json['bloomberg.com']
        let breitbart = articles_json['breitbart.com']
        let buzzfeednews = articles_json['buzzfeednews.com']
        let cbn = articles_json['cbn.com']
        let cbsnews = articles_json['cbsnews.com']
        let csmonitor = articles_json['csmonitor.com']
        let cnn = articles_json['cnn.com']
        let thedailybeast = articles_json['thedailybeast.com']
        let democracynow = articles_json['democracynow.org']
        let factcheck = articles_json['factcheck.org']
        let forbes = articles_json['forbes.com']
        let foxnews = articles_json['foxnews.com']
        let huffpost = articles_json['huffpost.com']
        let motherjones = articles_json['motherjones.com']
        let msnbc = articles_json['msnbc.com']
        let nationalreview = articles_json['nationalreview.com']
        let nbcnews = articles_json['nbcnews.com']
        let nypost = articles_json['nypost.com']
        let nytimes = articles_json['nytimes.com']
        let newsmax = articles_json['newsmax.com']
        let npr = articles_json['npr.org']
        let politico = articles_json['politico.com']
        let reason = articles_json['reason.com']
        let reuters = articles_json['reuters.com']
        let salon = articles_json['salon.com']
        let spectator = articles_json['spectator.org']
        let theatlantic = articles_json['theatlantic.com']
        let theguardian = articles_json['theguardian.com']
        let thehill = articles_json['thehill.com']
        let wsj = articles_json['wsj.com']


        let charities_json = msg.message

        console.log(charities_json[0]['keywords'])

        console.log(charities_json)

        let names = [charities_json[0]['name'], charities_json[1]['name'],charities_json[2]['name']]
        let scores = [charities_json[0]['score'], charities_json[1]['score'],charities_json[2]['score']]
        let links = [charities_json[0]['link'], charities_json[1]['link'],charities_json[2]['link']]
        let subcats = [charities_json[0]['subcategory'], charities_json[1]['subcategory'],charities_json[2]['subcategory']]
        let descriptions = [charities_json[0]['description'], charities_json[1]['description'],charities_json[2]['description']]

        console.log(names)
        console.log(scores)
        console.log(links)

        var i;
        for (i = 0; i < names.length; i++) {

              var elmnt = document.createElement("div")
              elmnt.setAttribute("class", "charity");

              // Obtain the charity ifno.
              var charity_name = names[i];
              var charity_link = links[i];
              var charity_score = scores[i];
              var charity_subcat = subcats[i];
              var charity_description = descriptions[i];

              console.log(charity_name)
              console.log(charity_link)
              console.log(charity_score)


              // Change the header text
              document.getElementsByClassName('default')[0].innerHTML  = "Consider reading these articles";

              // Container for the charity score.
              var score = document.createElement("div");
              score.innerHTML = 'Transparency Rating: '.concat(charity_score);
              score.setAttribute("class", "charityinfo");

              // Container for the subcategory
              var subcat = document.createElement("div");
              subcat.innerHTML = 'Category: '.concat(charity_subcat);
              subcat.setAttribute("class", "charityinfo");

              // Conatiner for name + dropdown
              var name = document.createElement("button");
			        name.innerHTML = charity_name;
              name.setAttribute("class", "name");

              var panel = document.createElement("div");
              panel.setAttribute("class", "panel");

              var par = document.createElement("p"); 
              var textnode = document.createTextNode(charity_description); 

              par.appendChild(textnode)
              panel.appendChild(par)


              var link = document.createElement("div");
			        link.setAttribute("class", "link");

              var link_ref = document.createElement("a");
              // Open a blank tab when the link is clicked.
              link_ref.innerHTML = 'Donate';
              link_ref.setAttribute("target", "_blank");
              link_ref.setAttribute("href", 'https://'.concat(charity_link));

              link.appendChild(link_ref)

              // Put the score and link to the element
              elmnt.appendChild(name);
              elmnt.appendChild(panel);
              elmnt.appendChild(subcat);
              elmnt.appendChild(score);
              elmnt.appendChild(link);

              // Append the new element to the list.
              article_list.appendChild(elmnt);              

            }

            var acc = document.getElementsByClassName("name");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                  /* Toggle between adding and removing the "active" class,
                  to highlight the button that controls the panel */
                  this.classList.toggle("active");

                  /* Toggle between hiding and showing the active panel */
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                    panel.style.display = "none";
                  } else {
                    panel.style.display = "block";
                  }
                });

            }
        }
    });


 