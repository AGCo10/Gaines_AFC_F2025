import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DeleteWidgetModal } from '../DeleteWidgetModal';
import * as WidgetClient from '../../util/WidgetClient';
import { vi } from 'vitest';

vi.mock('../util/WidgetClient');

describe('DeleteWidgetModal', () => {
    const mockWidget = { id: 1 , name: 'Test Widget' };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders the delete button', () => {
        render(<DeleteWidgetModal widget={mockWidget} />);
        const buttonElement = screen.getByText(/Destroy/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('opens the modal on button click', () => {
        render(<DeleteWidgetModal widget={mockWidget} />);
        fireEvent.click(screen.getByText(/Destroy/i));
        const modalHeader = screen.getByText(/Confirmation to Destroy/i);
        expect(modalHeader).toBeInTheDocument();
    });

    test('closes the modal on cancel', async () => {
        render(<DeleteWidgetModal widget={mockWidget} />);
        fireEvent.click(screen.getByText(/Destroy/i));
        fireEvent.click(screen.getByText(/Cancel/i));
        await waitFor(() => {
            expect(screen.queryByText(/Confirmation to Destroy/i)).not.toBeInTheDocument();
        });
    });

    test('confirms deletion when the correct name is input', async () => {
        render(<DeleteWidgetModal widget={mockWidget} />);
        fireEvent.click(screen.getByText(/Destroy/i));
        vi.spyOn(WidgetClient, 'deleteWidget')


        const inputElement = screen.getByPlaceholderText(mockWidget.name);
        fireEvent.change(inputElement, { target: { value: mockWidget.name } });
        fireEvent.click(screen.getByRole("button", {name: "Confirm"}));

        await waitFor(() => {
            expect(WidgetClient.deleteWidget).toHaveBeenCalledWith(mockWidget.id);
            expect(screen.queryByText(/Confirmation to Destroy/i)).not.toBeInTheDocument(); // Modal should close
        });
    });

    test('does not confirm deletion when the name is incorrect', async () => {
        render(<DeleteWidgetModal widget={mockWidget} />);

        // Open the modal
        fireEvent.click(screen.getByText(/Destroy/i));

        // Spy on the deleteWidget function
        const deleteSpy = vi.spyOn(WidgetClient, 'deleteWidget');

        const inputElement = screen.getByPlaceholderText(mockWidget.name);
        fireEvent.change(inputElement, { target: { value: "not " + mockWidget.name } });
        fireEvent.click(screen.getByRole("button", { name: /Confirm/i }));

        // Ensure the delete function was not called
        expect(deleteSpy).not.toHaveBeenCalled();
    });
});