// LOADING THE JAVASCRIPT CLIENT LIBRARY
// We'll start with a exercise that performs some common setup tasks needed to make
// YouTube Data API calls using the Google APIs JavaScript client library. 

// In search.js file:
// To get familiar with displaying output, modify the existing sample to add in
// a call to the showResponse() function right after the API key is set inside 
// onYouTubeApiLoad() [line 22]. Pass in a string like "Hooray!" to showResponse(),
// and confirm that it shows up in your HTML on the Result panel.

// Answer is:
showResponse("Hooray!");

//A BASIC SEARCH.LIST
// We'll start with a basic request to search YouTube—the underlying API call is search.list().

// The new search() function [line 24 in the js file] added to the previous code makes the API call. 
// The code specifies one parameter, part: 'id' [line 27], which tells the API that
// we want to retrieve back only the YouTube ids of the search results.

// Once the API call completes, the onSearchResponse() [line 36] function is called 
// automatically by the client library.

// The only thing left to do is to handle the search response—in this case, we just
// want to display the raw JavaScript value on our web page.

Instead of using "id", you can pass in the value "snippet" for the part parameter. 
This will tell the API that you'd like to retrieve information like the title 
and description about each item in your search results.

The q parameter tells the API to only include YouTube search results whose title, 
description, or keywords match the value you pass in
