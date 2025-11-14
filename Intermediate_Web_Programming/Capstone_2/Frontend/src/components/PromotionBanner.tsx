import {BannerContext} from "../util/BannerContext.tsx";
import {useContext} from "react";


export const PromotionBanner = () => {
    const {bannerTheme} = useContext(BannerContext);
    const visibility = bannerTheme;

    return (
                <div id="promotion-banner" className={visibility}>
                    <p>Special Promotion: Get 20% off your first order! Use code: PROMO20 </p>
                </div>
            )
    }