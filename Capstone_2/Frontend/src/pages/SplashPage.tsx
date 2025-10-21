import Brightforge_logo from '../assets/Brightforge_logo.jpeg'

export const SplashPage = () => {
    return (
        <>
            <div className={"h-10 col-lg-12"}></div>
            <div className={"grid grid-cols-3 grid-rows-3 gap-2"}>
                <div className="row-start-2 place-content-center m-auto">
                    <button type="button" className="Forge-Button">
                        Enter The Forge
                    </button>
                </div>
                <div className="row-span-3 col-start-2">
                    <img src={Brightforge_logo} alt="BrightForge Logo"/>
                </div>
                <div className="col-start-3 row-start-2">Scrolling widgets coming out to the right from the logo</div>
            </div>
        </>
    )
}