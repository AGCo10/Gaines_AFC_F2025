import axios from 'axios';
import {useState, useEffect} from "react";

const RandomDogPage = () => {
    const[imageSrc, setImageSrc] = useState(null)

    const baseURL = ('https://dog.ceo/api')

    // we will preload the page with an image with the following. Alternatively, we could choose a specific image and set it in the use state
    useEffect(() => {
        // Make an HTTP request
        let route = 'breeds/image/random'
        let endpoint = `${baseURL}/${route}`
        axios.get(endpoint)
            .then(response => {
                setImageSrc(response.data.message)

                console.log(response.data.message)
            })
            .catch(error => console.log(error))

    }, []);

    //The following only happens when the button is clicked.
    const handleClick = (event) => {
        //If we were doing a form, we would prevent default. Since this button is doing a custom event, we don't actually need the following event.preventDefault() line
        event.preventDefault() ;
        // Make an HTTP request
        let route = 'breeds/image/random'
        let endpoint = `${baseURL}/${route}`
        axios.get(endpoint)
            .then(response => {
                setImageSrc(response.data.message)

                console.log(response.data.message)
            })
            .catch(error => console.log(error))

    }

    return (
        <>
            <h1>I am the Dog Page</h1>
            <button onClick={handleClick}>Click Me!</button>
            <br/>
            <img src={imageSrc} alt="Random Dog Image"/>
        </>
    )
}

export default RandomDogPage ;