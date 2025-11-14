import {type Context, createContext, useEffect, useState} from "react";

export const BannerContext: Context<any> = createContext(null);

export function BannerContextProvider ({children}:{children: any}) {
    const [bannerTheme, setBannerTheme] = useState('hidden');

    useEffect(() => {
        console.log(bannerTheme)
        const saved = localStorage.getItem('theme');
        if (saved) {
            setBannerTheme(saved);
        } setBannerTheme('hidden');
    }, [])

    useEffect(() => {
        console.log(bannerTheme)
        localStorage.setItem('theme', bannerTheme);
    }, [bannerTheme]);

    const handleToggle = () => {
        if (bannerTheme === 'hidden') {
            const newBannerTheme = 'promotion-banner';
            setBannerTheme(newBannerTheme);
        } else {
            const newBannerTheme = 'hidden';
            setBannerTheme(newBannerTheme);
        }
    }

    return (
        <BannerContext.Provider value={{bannerTheme, handleToggle}}>
            {children}
        </BannerContext.Provider>
);}

// export function useBannerContext() {
//     useContext(BannerContext);
// }