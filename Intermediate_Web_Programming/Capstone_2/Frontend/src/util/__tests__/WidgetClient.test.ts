import {describe, expect} from "vitest";
import {addWidget, deleteWidget, getWidgets, updateWidget} from "../WidgetClient.ts";
import axios from "axios";
import type {Widget} from "../Widget.ts";

describe('Widget Client', () => {
    it('should call axios GET to get all Widgets', async () => {
        const axiosSpy = vi.spyOn(axios, 'get').mockResolvedValueOnce({});
        await getWidgets();
        expect(axiosSpy).toHaveBeenCalledWith('/api/widget')
    })

    it('should call axios POST to add a widget', async () => {
        const axiosSpy = vi.spyOn(axios, 'post').mockResolvedValueOnce({});
        const testWidgetToAdd: Widget = {
            name: "Test todo"
        }
        await addWidget(testWidgetToAdd);
        expect(axiosSpy).toHaveBeenCalledWith('/api/widget', testWidgetToAdd);
    })

    it('should call axios PATCH to update a widget', async () => {
        const axiosSpy = vi.spyOn(axios, 'patch').mockResolvedValueOnce({});
        const testWidgetToUpdate: Widget = {
            id: 1,
            name: "Test todo"
        }
        await updateWidget(testWidgetToUpdate);
        expect(axiosSpy).toHaveBeenCalledWith('/api/widget/' + testWidgetToUpdate.id, testWidgetToUpdate);
    })

    it('should call axios DELETE to remove a widget', async () => {
        const axiosSpy = vi.spyOn(axios, 'delete').mockResolvedValueOnce({});
        const testWidgetToDelete: Widget = {
            id: 1,
            name: "Test todo"
        }
        await deleteWidget(testWidgetToDelete.id);
        expect(axiosSpy).toHaveBeenCalledWith('/api/widget/' + testWidgetToDelete.id);
    })
})