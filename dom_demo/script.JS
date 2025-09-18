// select button globally so we can use anywhere
// returns ALL buttons but we can say we only want the first one [0]
let btn = document.getElementsByTagName("button")[0]
// select img tag globally so we can use anywhere
let image = document.getElementsByTagName("img")[0]
const BASE_URL = "https://dog.ceo/api"

// sets a default dog image for all users when they log in
image.setAttribute("src", "https://images.dog.ceo/breeds/chow/n02112137_126.jpg")

// add "click" event listener to btn[0] ONLY
btn.addEventListener("click", ()=>{
    console.log("In the click")
    // second part of endpoint
    let route = "breeds/image/random"
    // uses global base url with local route for a specific endpoint
    let endpoint = `${BASE_URL}/${route}`
    console.log(endpoint)
//     http request
    fetch(endpoint) // 1) Utilize the endpoint and correct verb (method)
        .then((response) => {
            if(response.ok){
                console.log("Response: ", response)
                // parse the response and send to next part of chain
                return response.json()
            } else {
                // custom error message
                throw new Error("Colby broke it!!!!")
            }
        })
        .then((parsedData) => {
            console.log("Parsed Data",  parsedData.message)
            //  global image[0] tag and we are setting src attribute with new url for image
            image.setAttribute("src", parsedData.message)
        })
        .catch((errors)=> {
            console.log("Errors: ", errors.message)
        })
})

// EXAMPLE - custom function passed into event listener
// const doggy = () => {
//     console.log("hello")
// }
// pass in actual function
// addEventListener("click", doggy)