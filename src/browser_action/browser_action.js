
chrome.runtime.sendMessage({ "message" : "startFunc" });


chrome.runtime.onMessage.addListener((msg, sender) => {
	if (msg.subject === 'reset'){
		console.log("resetting popup")
	}
});

function format_html_per_news_source(news_name,news_link,document) {

  // create html element
  var elmnt = document.createElement("div");
  elmnt.setAttribute("class", "newsOrg");

  // create a link to the relevant search
  var link = document.createElement("div");
  link.setAttribute("class", "link");

  var link_ref = document.createElement("a");
  // Open a blank tab when the link is clicked.
  link_ref.innerHTML = news_name;
  link_ref.setAttribute("target", "_blank");
  link_ref.setAttribute("href", 'https://'.concat(news_link));

  link.appendChild(link_ref);

  var panel = document.createElement("div");
  panel.setAttribute("class", "panel");

  // Put the score and link to the element
  // elmnt.appendChild(name);
  elmnt.appendChild(link);
  elmnt.appendChild(panel);

  // return the element
  return elmnt;

};

  chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
    if (msg.subject === 'sendArticles') {
        

		console.log('articles recieved')
    console.log(msg)
    
        // initialize element output from fxn
        // let elmnt;

        // Change the header text
        document.getElementsByClassName('default')[0].innerHTML  = "Consider reading related articles from these news sources. Click to go to Google News search.";


        // get the json output
        let articles_json = msg.message;

        console.log(articles_json);


        //
        //
        //
        //
        // Get the event_list container
        let article_list_r = document.getElementById("article_list_r");


        // right center to right news sources
        var name = document.createElement("div");
        name.innerHTML = "Right to center-right";
        name.setAttribute("class", "name");

        var elmnt = document.createElement("div");;

        elmnt.appendChild(name)
        article_list_r.appendChild(elmnt); 

        let breitbart = articles_json['breitbart.com']

        // set the news org info
        var news_name = 'Breitbart';
        var news_link = breitbart;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_r.appendChild(elmnt);

        let cbn = articles_json['cbn.com']

        // set the news org info
        var news_name = 'CBN';
        var news_link = cbn;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_r.appendChild(elmnt);


        let foxnews = articles_json['foxnews.com']

        // set the news org info
        var news_name = 'Fox News';
        var news_link = foxnews;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_r.appendChild(elmnt);



        let nationalreview = articles_json['nationalreview.com']

        // set the news org info
        var news_name = 'National Review';
        var news_link = nationalreview;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_r.appendChild(elmnt);


        /*
        let nypost = articles_json['nypost.com']

        // set the news org info
        var news_name = 'New York Post';
        var news_link = nypost;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_r.appendChild(elmnt);
        */

        let newsmax = articles_json['newsmax.com']

        // set the news org info
        var news_name = 'Newsmax';
        var news_link = newsmax;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_r.appendChild(elmnt);



        let reason = articles_json['reason.com']

        // set the news org info
        var news_name = 'Reason';
        var news_link = reason;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_r.appendChild(elmnt);


        /*
        let spectator = articles_json['spectator.org']

        // set the news org info
        var news_name = 'The Spectator';
        var news_link = spectator;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_r.appendChild(elmnt);
        */



        let wsj = articles_json['wsj.com']

        // set the news org info
        var news_name = 'The Wall Street Journal';
        var news_link = wsj;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_r.appendChild(elmnt);


        //
        //
        //
        //
        //
        // left to left-center news sources

        // Get the event_list container
        let article_list_l = document.getElementById("article_list_l");


        var name = document.createElement("div");
        name.innerHTML = "Left to center-left";
        name.setAttribute("class", "name");

        var elmnt = document.createElement("div");;

        elmnt.appendChild(name)
        article_list_l.appendChild(elmnt); 

        // get output for abcnews
        let abcnews = articles_json['abcnews.go.com'];

        // set the news org info
        var news_name = 'ABC News';
        var news_link = abcnews;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);  


        // get output for aljazeera
        let aljazeera = articles_json['aljazeera.com']

        // set the news org info
        var news_name = 'Al Jazeera';
        var news_link = aljazeera;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);  


        let theatlantic = articles_json['theatlantic.com']

        // set the news org info
        var news_name = 'The Atlantic';
        var news_link = theatlantic;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);


        let buzzfeednews = articles_json['buzzfeednews.com']

        // set the news org info
        var news_name = 'BuzzFeed News';
        var news_link = buzzfeednews;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);

        let cbsnews = articles_json['cbsnews.com']

        // set the news org info
        var news_name = 'CBS News';
        var news_link = cbsnews;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);

         /*
        let cnn = articles_json['cnn.com']

        // set the news org info
        var news_name = 'CNN';
        var news_link = cnn;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);
        */


        /*
        let thedailybeast = articles_json['thedailybeast.com']

        // set the news org info
        var news_name = 'The Daily Beast';
        var news_link = thedailybeast;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);
        */


       let democracynow = articles_json['democracynow.org']

       // set the news org info
       var news_name = 'Democracy Now';
       var news_link = democracynow;

       console.log(news_name);
       console.log(news_link);

       // get new element for this news org
       elmnt = format_html_per_news_source(news_name,news_link,document) 

       // Append the new element to the list.
       article_list_l.appendChild(elmnt);

       let theguardian = articles_json['theguardian.com']

        // set the news org info
        var news_name = 'The Guardian';
        var news_link = theguardian;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);


        let huffpost = articles_json['huffpost.com']

        // set the news org info
        var news_name = 'HuffPost';
        var news_link = huffpost;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);


        let motherjones = articles_json['motherjones.com']

        // set the news org info
        var news_name = 'Mother Jones';
        var news_link = motherjones;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);



        /*
        let msnbc = articles_json['msnbc.com']

        // set the news org info
        var news_name = 'MSNBC';
        var news_link = msnbc;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);
        */

        let nbcnews = articles_json['nbcnews.com']

        // set the news org info
        var news_name = 'NBC News';
        var news_link = nbcnews;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);

        let nytimes = articles_json['nytimes.com']

        // set the news org info
        var news_name = 'The New York Times';
        var news_link = nytimes;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);


        let politico = articles_json['politico.com']

        // set the news org info
        var news_name = 'Politico';
        var news_link = politico;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);


        let salon = articles_json['salon.com']

        // set the news org info
        var news_name = 'Salon';
        var news_link = salon;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_l.appendChild(elmnt);


                //
        //
        //
        //
        // center news sources

        // Get the event_list container
        let article_list_c = document.getElementById("article_list_c");

        
        var name = document.createElement("div");
        name.innerHTML = "Center";
        name.setAttribute("class", "name");

        var elmnt = document.createElement("div");;

        elmnt.appendChild(name)
        article_list_c.appendChild(elmnt); 


        let apnews = articles_json['apnews.com']

        // set the news org info
        var news_name = 'Associated Press';
        var news_link = apnews;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_c.appendChild(elmnt);  


        let bbc = articles_json['bbc.com']

        // set the news org info
        var news_name = 'BBC';
        var news_link = bbc;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_c.appendChild(elmnt);  

        let bloomberg = articles_json['bloomberg.com']

        // set the news org info
        var news_name = 'Bloomberg';
        var news_link = bloomberg;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_c.appendChild(elmnt);  

        /*
        let csmonitor = articles_json['csmonitor.com']

        // set the news org info
        var news_name = 'Christian Science Monitor';
        var news_link = csmonitor;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_c.appendChild(elmnt);
        */

        let factcheck = articles_json['factcheck.org']

        // set the news org info
        var news_name = 'FactCheck.org';
        var news_link = factcheck;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_c.appendChild(elmnt);



        let forbes = articles_json['forbes.com']

        // set the news org info
        var news_name = 'Forbes';
        var news_link = forbes;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_c.appendChild(elmnt);



        let thehill = articles_json['thehill.com']

        // set the news org info
        var news_name = 'The Hill';
        var news_link = thehill;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_c.appendChild(elmnt);


        let npr = articles_json['npr.org']

        // set the news org info
        var news_name = 'NPR';
        var news_link = npr;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_c.appendChild(elmnt);


        let reuters = articles_json['reuters.com']

        // set the news org info
        var news_name = 'Reuters';
        var news_link = reuters;

        console.log(news_name);
        console.log(news_link);

        // get new element for this news org
        elmnt = format_html_per_news_source(news_name,news_link,document) 

        // Append the new element to the list.
        article_list_c.appendChild(elmnt);



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


 