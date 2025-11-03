import { Widgets} from "../components/Widgets.tsx";


export const WidgetPage = () => {


    // const handleAddWidget = async (widgetToAdd: Widget) => {
    //     const savedWidget = await addWidget(widgetToAdd);



    return (
        <>
            <button>Add a Widget</button>
            {/*The Widgets Component is the assortment of widgets pulled from the backend.
            It is an entirely presentational component. */}
            <Widgets />
        </>
    )
}