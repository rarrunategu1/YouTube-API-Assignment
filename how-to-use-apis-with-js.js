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


