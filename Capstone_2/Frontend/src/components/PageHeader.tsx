import {MyNavbar} from "./MyNavbar.tsx";

export const PageHeader = () => {
    return(
        <>
            <div className={"col-lg-12 col-md-12 col-sm-12"}>
                <h1>
                    BrightForge
                </h1>
                <MyNavbar />
            </div>
        </>
    )
}

