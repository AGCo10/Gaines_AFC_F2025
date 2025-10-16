import './App.css'
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup/src/index.js";

const App = () => {

    const DataSchema = yup.object().shape({
        first_name: yup
            .string()
            .min(1, "Name must be at least 1 characters")
            .max(20, "Name can not be more than 20 characters")
            .required("Username is required"),
        last_name: yup
            .string()
            .min(1, "Name must be at least 1 characters")
            .max(20, "Name can not be more than 20 characters"),
        email: yup
            .string()
            .email("Must be a valid email"),
        state: yup
            .string()
            .required("state")
            .oneOf(["texas", "missouri", "illinois"], "This is not a recognized state"),
    });

    const {register, // This replaces the "name"
    handleSubmit, // This is how we handle Data once submitted
    setValue,
    reset,
    formState: {errors},
    watch} = useForm({
        resolver: yupResolver(DataSchema)
    }) ; // this updates the data field?

    const onSubmit = (data) => {
        console.log(data) ;
    }


    // The following function is good for a debugging tool
    const handleChange = (event) => {
        console.log(`${event.target.name}: ${event.target.value}`) ;
        setValue(event.target.name, event.target.value) ;
    }

  return <>
      <h1>Form - React Hook Form Demo</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <label> First Name:
              <input type="text"
                     {...register("fname", {required: true})}
                     onChange={handleChange}
              />
          </label>
          <label> Age
              <input type="text"
                     {...register("age", {required: true})}
              />
          </label>

          <label>State
          <select {...register("state")}  id="state">
              <option value="" disabled>Choose...</option>
              <option value="new_york">NY</option>
              <option value="texas">TX</option>
              <option value="illinois">IL</option>
              <option value="missouri">MO</option>
          </select>
          </label>


          <button type={"submit"}>Submit</button>
          {errors.state && <div style={{ fontSize:"0.9rem", color:"crimson" }}>{errors.age.message}</div>}
          <button type={"reset"}>Reset</button>
      </form>
  </>
}

export default App
