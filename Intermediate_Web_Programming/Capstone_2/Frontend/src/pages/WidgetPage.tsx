import { Widgets} from "../components/Widgets.tsx";
import {CreateWidgetModal} from "../components/CreateWidgetModal.tsx";


export const WidgetPage = () => {


    // const handleAddWidget = async (widgetToAdd: Widget) => {
    //     const savedWidget = await addWidget(widgetToAdd);



    return (
        <>
            <CreateWidgetModal/>
            {/*The Widgets Component is the assortment of widgets pulled from the backend.
            It is currently an entirely presentational component. */}
            <Widgets />
        </>
    )
}