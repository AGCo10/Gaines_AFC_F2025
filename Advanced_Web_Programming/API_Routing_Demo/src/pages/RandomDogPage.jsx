const RandomDogPage = () => {
    const handleClick = (event) => {
        //If we were doing a form, we would prevent default. Since this button is doing a custom event, we dont actually need the following event.preventDefault() line
        event.preventDefault() ;
        // Make an HTTP request
        axios.get()

    }

    return (
        <>
            <h1>I am the Dog Page</h1>
            <!-- What event? on a click? -->
            <button onClick={handleClick}>Click Me!</button>
        </>
    )
}

export default RandomDogPage ;