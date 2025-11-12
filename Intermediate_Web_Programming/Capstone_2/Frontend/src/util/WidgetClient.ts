import axios from "axios";
import type {Widget} from "./Widget.ts";

export const getWidgets = async () : Promise<Widget[]> => {
    const result = await axios.get('/api/widget');
    console.log(result.data);
    return result.data;
}

export const addWidget = async (widgetToAdd: Widget): Promise<Widget> => {
    const result = await axios.post('/api/widget', widgetToAdd);
    return result.data
}

export const updateWidget = async (widgetToUpdate: Widget): Promise<void> => {
    await axios.patch('/api/widget/'+ widgetToUpdate.id, widgetToUpdate);
}

export const deleteWidget = async (id: number | undefined) : Promise<void> => {
    await axios.delete('/api/widget/'+ id);
}