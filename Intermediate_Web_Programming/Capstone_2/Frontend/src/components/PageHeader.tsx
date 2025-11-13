import {MyNavbar} from "./MyNavbar.tsx";
import {PromotionBanner} from "./PromotionBanner.tsx";

export const PageHeader = () => {
    return(
        <>
            <div className={"col-12"}>
                <MyNavbar />
            </div>
                <PromotionBanner/>
        </>
    )
}

