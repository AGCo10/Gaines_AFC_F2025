import Brightforge_logo from '../assets/Brightforge_logo.jpeg'
import {Nav} from "react-bootstrap";

export const SplashPage = () => {



    return (
        <>
            <div className={"grid grid-cols-3 grid-rows-3 gap-2"}>
                <div className="row-start-2 place-content-center m-auto">
                    <Nav.Link href={'inventory'} className={'Forge-Button'}>Enter The Forge</Nav.Link>
                </div>
                <div className="row-span-3 col-start-2">
                    <img src={Brightforge_logo} className={'Brightforge-Logo'} alt="BrightForge Logo"/>
                </div>
                <div className="col-start-3 row-start-2">Scrolling widgets coming out to the right from the logo</div>
            </div>
        </>
    )
}