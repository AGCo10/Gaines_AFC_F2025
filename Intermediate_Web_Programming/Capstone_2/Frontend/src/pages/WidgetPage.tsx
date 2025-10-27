import { Widgets} from "../components/Widgets.tsx";
import {useState} from "react";


export const WidgetPage = () => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    return (
        <>
            <button>Add a Widget</button>
            <Widgets />
        </>
    )
}