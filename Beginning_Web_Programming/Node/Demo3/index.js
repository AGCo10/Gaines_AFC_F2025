const yesNoWords = require("yes-no-words")
const yesArray = [ "nice", "ohhhh-yaaaahhh", "say YeeAAAAASSS", "OOOOOOOOOH  YYYYYYYEEEEEEHHHHH!!!!!", "🤩"]
const noArray = ["Dats a No-no", "Orrrr Norrrrr", "Niet", "F*%# No", "Try Again"]

//spread operator to make a combined array
const wordbank = [...yesArray, ...noArray]

for(let i = 0; i < 5 ; i++) {
    let k = Math.round((Math.random() * 100) / 10)
    console.log(wordbank[k])
}

// Foundation
const express = require("express")
const app = express()
const port = process.env.PORT || 3000;

// Route Handler: includes a get command on the app and returns a response on the site.
app.get("/doggy", (req, res) => {
    res.send("Hello World")
})

// Listener
app.listen(port, console.log(`Express servier running on port ${port}`))