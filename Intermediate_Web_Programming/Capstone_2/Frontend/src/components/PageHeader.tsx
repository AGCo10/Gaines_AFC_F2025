import {MyNavbar} from "./MyNavbar.tsx";
import {PromotionBanner} from "./PromotionBanner.tsx";

export const PageHeader = () => {

    return(
        <div className={'grid grid-col-12 gap-2'}>
                <MyNavbar />
                <PromotionBanner />
        </div>
    )
}

