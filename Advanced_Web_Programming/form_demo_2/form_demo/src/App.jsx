import './App.css'
import {useForm} from "react-hook-form";

const App = () => {

    const {register, // This replaces the "name"
    handleSubmit, // This is how we handle Data once submitted
    setValue} = useForm() ; // this updates the data field?

    const onSubmit = (data) => {
        console.log(data) ;
    }

  return <>
      <h1>Form - React Hook Form Demo</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label> fname:
              <input type="text" {...register("fname")}/>
          </label>
      </form>
  </>
}

export default App
