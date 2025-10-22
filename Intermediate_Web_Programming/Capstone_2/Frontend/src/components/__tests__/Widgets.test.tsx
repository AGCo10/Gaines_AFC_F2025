import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Widgets } from '../Widgets';
import {widgetTable} from "../../util/widgetTable.ts";

// Mock widgetTable data
vi.mock('../util/widgetTable.ts', () => ({
    widgetTable: [
        {
            imageURL: 'https://example.com/image1.jpg',
            name: 'Widget 1',
            description: 'Description for Widget 1',
            price: 10,
            rating: 4.5,
        },
        {
            imageURL: 'https://example.com/image2.jpg',
            name: 'Widget 2',
            description: 'Description for Widget 2',
            price: 20.00,
            rating: 4.0,
        },
    ],
}));

describe('Widgets Component', () => {
    beforeEach(() => {
        render(<Widgets />);
    });

    it('renders without crashing', () => {
        const widgetContainer = screen.getAllByRole('paragraph');
        expect(widgetContainer).toHaveLength(3);
    });

    it('displays the correct number of widgets', () => {
        const widgets = screen.getAllByRole('img'); // Check images for widgets
        expect(widgets.length).toBe(widgetTable.length);
    });

    it('displays correct widget information', () => {
        widgetTable.forEach((widget) => {
            const widgetElement = screen.getByText(widget.name);
            expect(widgetElement).toBeInTheDocument();
            expect(screen.getByAltText(`${widget.name} image`)).toHaveAttribute('src', widget.imageURL);
            expect(screen.getByText(widget.description)).toBeInTheDocument();
            expect(screen.getByText(widget.price)).toBeInTheDocument();
            expect(screen.getByText(widget.rating)).toBeInTheDocument();
        });
    });

    it('renders correct class names for styling', () => {
        const widgetElements = screen.getAllByRole('img');
        widgetElements.forEach((element) => {
            expect(element.closest('div')).toHaveClass('w-full rounded overflow-hidden shadow-lg');
        });
    });
});