import { render, screen, waitFor } from '@testing-library/react';
import { Widgets } from '../Widgets.tsx';
import * as WidgetClient from '../../util/WidgetClient.ts';
import {vi} from 'vitest';

describe('Widgets Component', () => {
    const mockWidgets = [{ name: 'Widget 1', description: 'Description 1', price: 10, rating: 3.2 },
    { name: 'Widget 2', description: 'Description 2', price: 20, rating: 4.5 }];

    vi.spyOn(WidgetClient, 'getWidgets').mockResolvedValue([{name: 'Widget 1', description: 'Description 1', price: 10, rating: 4.5 },
        { name: 'Widget 2', description: 'Description 2', price: 20, rating: 3.2 }]);


    it('renders without crashing', () => {
        render(<Widgets />);
        expect(screen.getByRole('widgetTable')).toBeInTheDocument();
    });

    it('calls getWidgets on load', async () => {
        render(<Widgets />);
        await waitFor(() => {
            // The following call is two because of the spy test and rendering the widgets... I think
            expect(WidgetClient.getWidgets).toHaveBeenCalledTimes(2);
        });
    });

    it('displays widgets after fetching', async () => {
        render(<Widgets />);
        await waitFor(() => {
            expect(screen.getByText('Widget 1')).toBeInTheDocument();
            expect(screen.getByText('Description 1')).toBeInTheDocument();
            expect(screen.getByText(10)).toBeInTheDocument();
            expect(screen.getByText(4.5)).toBeInTheDocument();
        });
    });

    it('displays all widgets correctly', async () => {
        render(<Widgets />);
        await waitFor(() => {
            mockWidgets.forEach(widget => {
                expect(screen.getByText(widget.name)).toBeInTheDocument();
                expect(screen.getByText(widget.description)).toBeInTheDocument();
                expect(screen.getByText(widget.price)).toBeInTheDocument();
                expect(screen.getByText(widget.rating)).toBeInTheDocument();
            });
        });
    });

    it('handles empty widget list', async () => {
        render(<Widgets />);
        await waitFor(() => {
            expect(screen.queryByText('Widget 1')).not.toBeInTheDocument();
            expect(screen.queryByText('Widget 2')).not.toBeInTheDocument();
        });
    });
});