import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CreateWidgetModal } from '../CreateWidgetModal.tsx';
import * as WidgetClient from '../../util/WidgetClient';
import { vi } from 'vitest';
import type {Widget} from "../../util/Widget.ts";

vi.mock('../util/WidgetClient');

describe('CreateWidgetModal', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders the modal button', () => {
        render(<CreateWidgetModal />);
        const buttonElement = screen.getByText(/Forge a Widget/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('opens modal on button click', () => {
        render(<CreateWidgetModal />);
        const buttonElement = screen.getByText(/Forge a Widget/i);
        fireEvent.click(buttonElement);
        const modalHeader = screen.getByText(/Build A Widget/i);
        expect(modalHeader).toBeInTheDocument();
    });

    test('validates form fields', async () => {
        render(<CreateWidgetModal />);
        fireEvent.click(screen.getByText(/Forge a Widget/i));

        fireEvent.click(screen.getByText(/Forge Widget/i)); // Trigger form submission

        expect(await screen.findByText(/Name must be at least 3 characters./i)).toBeInTheDocument();

        // Fill in the form correctly
        fireEvent.change(screen.getByPlaceholderText(/Widget Name/i), { target: { value: 'Test Widget' } });
        fireEvent.change(screen.getByPlaceholderText(/Widget Description/i), { target: { value: 'This is a test description.' } });
        fireEvent.change(screen.getByPlaceholderText(/Widget Price/i), { target: { value: '10.00' } });
        fireEvent.click(screen.getByText(/Forge Widget/i));
        vi.spyOn(WidgetClient, 'addWidget')

        const payload: Widget = {
            name: 'Test Widget',
            description: 'This is a test description.',
            price: 10.00,
            rating: 5.0,
        }

        await waitFor(async () => {
            expect(WidgetClient.addWidget).toBeCalledWith(payload);
        });
    });


    test('resets form on click reset button', () => {
        render(<CreateWidgetModal />);
        fireEvent.click(screen.getByText(/Forge a Widget/i));

        fireEvent.change(screen.getByPlaceholderText(/Widget Name/i), { target: { value: 'Test Widget' } });
        fireEvent.change(screen.getByPlaceholderText(/Widget Price/i), { target: { value: '20.00' } });

        // Click Reset
        fireEvent.click(screen.getByText(/Reset/i));

        expect(screen.getByPlaceholderText(/Widget Name/i)).toHaveValue('');
        expect(screen.getByPlaceholderText(/Widget Price/i)).toHaveValue(null); // Assuming the default is 0
    });
});