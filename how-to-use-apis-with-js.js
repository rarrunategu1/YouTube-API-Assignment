// HTTP involves sending hypertext (text with links).

// Client/server relationship is a prerequisite of a 
// set of principles called REST (or Representational State Transfer). 

// Whenever you navigate through a site by clicking links, you're making 
// a state transition, which brings you to the next page (representing the next state of the application)
// By following this simple model of clicking from page to page, you're starting to follow REST principles

// An API, or application programming interface, is kind of like a coding contract:
// it specifies the ways a program can interact with an application. For example, 
// if you want to write a program that reads and analyzes data from Twitter, you'd 
// need to use the Twitter API, which would specify the process for authentication,
// important URLs, classes, methods, and so on.

// For an API or web service to be RESTful, it must do the following:
// Separate the client from the server
// Not hold state between requests (meaning that all the information necessary to 
// respond to a request is available in each individual request; no data, or state, 
// is held by the server from request to request)
// Use HTTP and HTTP methods (as explained in the next section).

// Example of info we can get from an API
// // {
// //   "myBlog": {
// //     "pageViews": "4720",
// //     "subscribers": "1711",
// //     "numberOfPosts": "37",
// //     "mostRecentPost": "2013-01-04",
// //   }
// // }



// We haven't sent our request, below and we need to console.log
// both the xhr.status (that was that "200" from before) and the xhr.statusText 
// (it should be "OK")
// On line 44 call the .send() method on xhr. This is what sends the request!
// On lines 45 – 46, console.log the xhr.status and xhr.statusText attributes 

var xhr = new XMLHttpRequest();//we've created the xhr variable, which stands for XML HTTP Request. This is how we make an HTTP request!
xhr.open("GET", "https://www.codecademy.com/", false); //we make the actual request to Codecademy.com
// Add your code below!
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);

// THE FOUR VERBS
// HTTP methods:  just four HTTP "verbs" you'll need to know! 
// They are:

// GET: retrieves information from the specified source (you just saw this one!)
// POST: sends new information to the specified source.
// PUT: updates existing information of the specified source.
// DELETE: removes existing information from the specified source


//ANATOMY OF A REQUEST

// THE REQUEST LINE, which tells the server what kind of request is being sent 
// (GET, POST, etc.) and what resource it's looking for;

// THE HEADER, which sends the server additional information (such as which client
// is making the request)

// THE BODY, which can be empty (as in a GET request) or contain data (if you're 
// POSTing or PUTing information, that information is contained here)

POST /codecademy/learn-http HTTP/1.1    // THE REQUEST LINE
Host: www.codecademy.com                // THE HEADER
Content-Type: text/html; charset=UTF-8  // THE HEADER

Name=Eric&Age=26                        // THE BODY

//ENDPOINTS
// Endpoints are API-defined locations where particular data are stored
// For instance, if you're using the API for a video hosting service, 
// there might be endpoints for the most popular videos, the most recent videos,
//or videos belonging to a certain genre or category.

// an API key identifies you to the API, which helps the API provider keep track 
// of how their service is used and prevent unauthorized or malicious activity.
// Some APIs require authentication using a protocol called OAuth.

// HTTP STATUS CODES
// The response from the server will contain a three-digit status code. 
// These codes can start with a 1, 2, 3, 4, or 5
// 1xx: You won't see these a lot. The server is saying, "Got it! I'm working on your request."

// 2xx: These mean "okay!" The server sends these when it's successfully responding to your request. 
// (Remember when you got a "200" back from Codecademy?)

// 3xx: These mean "I can do what you want, but I have to do something else first."
// You might see this if a website has changed addresses and you're using the old one; 
// the server might have to reroute the request before it can get you the resource you asked for.

// 4xx: These mean you probably made a mistake. The most famous is "404," meaning "file not found": 
// you asked for a resource or web page that doesn't exist.

// 5xx: These mean the server goofed up and can't successfully respond to your request.

// We've sent a GET request to a Codecademy page that doesn't exist! 
// Call status on xhr and console.log this value so you can see the status code returned by the server. It should be the dreaded '404'!

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/doesnt_exist", false);
xhr.send();
// Add your code below!
console.log(xhr.status);

//ANATOMY OF A RESPONSE
// The HTTP response structure mirrors that of the HTTP request. It contains:

HTTP/1.1 200 OK // A response line, which includes the three-digit HTTP status code;
 Content-Type: text/xml; charset=UTF-8  // A header, which includes further information about the server and its response;

 <?xml version="1.0" encoding="utf-8"?> // A header, which includes further information about the server and its response;
 <string xmlns="https://www.codecademy.com/">Accepted</string>  // The body, which contains the text of the response.

// //PARSING XML
// XML (which stands for E xtensible Markup Language) is very similar to HTML—it 
// uses tags between angle brackets. The difference is that XML allows you to use 
// tags that you make up, rather than tags that the W3C decided on. For instance, 
// you could create an API that returns information about a pet. As long as you
//document the structure of your API's response, other people can use your API 
//to get information about <pet>s.
<pet>
  <name>Jeffrey</name>
  <species>Giraffe</species>
</pet>

//this code is asking for an XML in return
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);

//PARSING JSON
// JSON (which stands for Java Script Object Notation) is an alternative to XML. 
// It gets its name from the fact that its data format resembles JavaScript objects, 
// and it is often more succinct than the equivalent XML. For instance, our same 
// <pet> Jeffrey would look like this in JSON:

{
  "pets": {
    "name": "Jeffrey",
    "species": "Giraffe"
  }
}

//Here is a JSON object in "demo", which represents the kind of information you might get
//back from an HTTP request. Reading from "demo" is just like reading JSON sent by a server.

var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

var json = JSON.parse(demo);
console.log(json);



// Go ahead and do three things:

// Create a variable called xhr and set it equal to new XMLHttpRequest().
// Call open xhr and pass it three arguments: "GET" (the type of request you'd like to make), "https://www.codecademy.com/" (the URL), and false (this means the exercise will wait until it gets a response from the server).
// Call .send() on xhr. We've already taken care of the console.log()s for you!

// Add your code below this line!

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.codecademy.com/", false); //false means means the exercise will wait until it gets a response from the server
xhr.send();


// Add your code above this line!

console.log(xhr.status);
console.log(xhr.statusText);



