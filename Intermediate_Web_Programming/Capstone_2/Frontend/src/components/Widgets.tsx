import {getWidgets} from "../util/WidgetClient.ts";
import {useEffect, useState} from "react";
import type {Widget} from "../util/Widget.ts";
import wimsicalWidget from "../assets/Whimsical-Wobbler.jpeg";
import {DeleteWidgetModal} from "./DeleteWidgetModal.tsx";
import {UpdateWidgetModal} from "./UpdateWidgetModal.tsx";

export const Widgets= () => {


    const [widgets, setWidgets] = useState<Widget[]>([]);

    useEffect(() => {
        (async () => {
            setWidgets(await getWidgets());
        })();
    }, [])


    const widgetsTabled = widgets.map((element, index) => {
        return(
            <div className="h-full w-full rounded overflow-hidden shadow-lg" id={'widget'} key={index}>
                <img className={'px-2 rounded-4xl'} src={wimsicalWidget} alt={element.name + " image"} />
                <div className="p-6 ">
                    <h3 className="font-bold text-xl mb-2">{element.name}</h3>
                    <p className="text-gray-700 text-base">{element.description}</p>
                </div>

                <div className="flex justify-between items-end px-6 py-4">
                    <label htmlFor="price">
                        Price <br />
                        <span id={"price"} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                            {element.price}
                        </span>
                    </label>
                    <label htmlFor="">
                        Rating <br />
                        <span id={"rating"} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                            {element.rating}
                        </span>
                    </label>
                </div>
                <div className={' flex gap-2 items-center justify-center p-2'}>
                    <UpdateWidgetModal widget={element} />
                    <DeleteWidgetModal widget={element} />
                </div>
            </div>

        )
    });

    return (
        <div role={'widgetTable'} className=" grid m-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {widgetsTabled}
        </div>
    )
}