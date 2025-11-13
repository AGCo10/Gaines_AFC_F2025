import {useContext} from "react";
import {BannerContext} from "../main.tsx";

export const PromotionBanner = () => {
    const visibility: string = useContext(BannerContext)
    const classStyle: string = visibility;

            return (
                <div id="promotion-banner" className={classStyle}>
                    <p>Special Promotion: Get 20% off your first order! Use code: PROMO20 </p>
                </div>
            )
    }