User comes to the page
clicks a button 
this generates an HTTP request, which can be done with fetch. \
We will be using axios instead.
Return an image of a dog. \
Axios does the extra stuff, like parsing under the hood.


AXIOS \
// The axios call is followed by the CRUD command.
axios.verb(endpoint) \
.then() // if okay, parse the data \
.then() // we do something with data \
.catch() // error handling \
.finally() // something that will be run no matter what.