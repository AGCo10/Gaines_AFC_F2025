function setUpForm(document) {
    const Form = document.querySelector("form")
    const Input = document.querySelector("#name")
    const Output = document.querySelector("#output")

    Form.addEventListener('submit', (event) => {
        event.preventDefault() ;
        let name = Input.value ;

        if(!name) Output.textContent = "Name is required." ;
        else Output.textContent = `Hello ${name}` ;
    })
}

module.exports = {setUpForm}


