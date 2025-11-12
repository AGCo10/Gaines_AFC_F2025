import Brightforge_logo from '../assets/Brightforge_logo.jpeg'
import {Nav} from "react-bootstrap";

export const SplashPage = () => {


    return (
        <>
            <div className={"grid grid-cols-3 grid-rows-3 gap-2"}>
                <div className="row-start-2 place-content-center m-auto">

                </div>
                <div className="row-span-3 col-start-2">
                    <Nav.Link href={'inventory'} className={'Forge-Button'}><img src={Brightforge_logo} className={'Brightforge-Logo'} alt="BrightForge Logo"/>
                </Nav.Link>
                </div>
                <div className="col-start-3 row-start-2"></div>
            </div>
        </>
    )
}