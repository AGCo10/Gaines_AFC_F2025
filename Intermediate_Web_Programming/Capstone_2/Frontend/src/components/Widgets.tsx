import {getWidgets} from "../util/WidgetClient.ts";
import {useEffect, useState} from "react";
import type {Widget} from "../util/Widget.ts";
import wimsicalWidget from "../assets/Whimsical-Wobbler.jpeg";

export const Widgets= () => {

    const [widgets, setWidgets] = useState<Widget[]>([]);

    useEffect(() => {
        (async () => {
            setWidgets(await getWidgets());
        })();
    }, [])

    const widgetsTabled = widgets.map((element, index) => {
        return(
            <div className="w-full rounded overflow-hidden shadow-lg" id={'widget'} key = {index}>
                <img src={wimsicalWidget} alt={element.name + " image"} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{element.name}</div>
                    <p className="text-gray-700 text-base"> {element.description} </p>
                </div>

                <div className="px-6 pt-4 pb-2">
                    <label htmlFor=""> Price <br/>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  {element.price}</span>
                    </label>
                    <label htmlFor=""> Rating <br/>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">  {element.rating}</span>
                    </label>
                </div>
            </div>
        )
    });

    return (
        <div className="grid grid-cols-4 gap-4">
            {widgetsTabled}
        </div>
    )
}