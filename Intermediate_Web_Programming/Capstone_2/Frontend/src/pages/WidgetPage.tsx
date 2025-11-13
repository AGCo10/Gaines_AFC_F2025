import { Widgets} from "../components/Widgets.tsx";
import {CreateWidgetModal} from "../components/CreateWidgetModal.tsx";


export const WidgetPage = () => {

    return (
        <div className={'grid col-12'}>
            <CreateWidgetModal/>
            {/*The Widgets Component is the assortment of widgets pulled from the backend. */}
            <Widgets />
        </div>
    )
}