import {widgetTable} from "../util/widgetTable.ts";

export const Widgets= () => {

    const widgetsTabled = widgetTable.map((element, index) => {
        return(
            <div className="w-full rounded overflow-hidden shadow-lg" id={'widget'} key = {index}>
                <img src={element.imageURL} alt={element.name + " image"} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{element.name}</div>
                    <p className="text-gray-700 text-base"> {element.description} </p>
                </div>
                    {element.price}
                <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{element.rating}</span>
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