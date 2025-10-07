
import './App.css'
import PasswordEntry from "./components/PasswordEntry.jsx";
import {monsters} from "./util/Database.js";
import HH_portrait_skin1 from './assets/HH_portrait_skin1.jpg' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

function App() {
  //This is a way to do in-line styling. Basically, create an object that contains the styles you want and then assign them in style to the element.

    const monsterCards = monsters.map((element, index) => {
        return(
            <Card key={index}>
                <img
                    alt="Sample"
                    src={HH_portrait_skin1}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        First Name: {element.firstName}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Last Name: {element.lastName}
                    </CardSubtitle>
                    <CardText>
                        Age: {element.age}
                        More Info: {element.moreInfo}
                    </CardText>
                    <Button>
                        Button
                    </Button>
                </CardBody>
            </Card>
        )
        }
    )

  return (
    <>

      <h1>Vite + React</h1>
        {monsterCards}

        <PasswordEntry />

    </>
  )
}

export default App
