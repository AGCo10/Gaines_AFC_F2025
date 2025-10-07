import { useState } from 'react'
import './App.css'

const App = () => {

    //referenced in the head of the form with the onSubmit attribute.
    const handleSubmit = (event) => {
      event.preventDefault() ;
        console.log("submitting")
        const payload = {
            firstName: fname,
            age: age,
            email: email
        }
        console.log(payload)
        //api routing
        // axios.post('/api/users', payload)
        //     .then(res => {})
        //     .catch()
        setFormData(initialState)
    }

    // Setting the initial values for the form.
    const initialState = {
        fname: "",
        age: 0,
        email: ""
    }


    const [formData, setFormData] = useState(initialState);
    const {fname, age, email} = formData

    const handleFormChange = (event) => {
        setFormData(
            {...formData,
            [event.target.name]: event.target.value }
        )
    }

    return (
    <>
      <h1>Form Demo</h1>
        <form onSubmit={handleSubmit} method={"GET"}>
            <label htmlFor={"fname"}>First Name
                <input
                    type={"text"}
                    id={"fname"}
                    name={"fname"}
                    value={fname}
                    onChange={handleFormChange} //Every time theres a change to the input, we will update the values
                />
            </label>
            <label htmlFor={"age"}>Age
                <input
                    type={"number"}
                    id={"age"}
                    name={"age"}
                    value={age}
                    onChange={handleFormChange} //Every time theres a change to the input, we will update the values
                />
            </label>
            <label htmlFor={"email"}>Email
                <input
                    type={"email"}
                    id={"email"}
                    name={"email"}
                    value={email}
                    onChange={handleFormChange} //Every time theres a change to the input, we will update the values
                />
            </label>
            <br/>
            <button type={"submit"}>Submit Me</button>
        </form>
    </>
  )
}

export default App
