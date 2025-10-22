import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {MyNavbar} from '../MyNavbar'; // Adjust the import based on your file structure

describe('Navbar Component', () => {
    beforeEach(() => {
        render(<MyNavbar />);
    });

    it('should remain visible when scrolling', () => {
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
        // Simulate scrolling (this is just a conceptual test)
        window.scrollTo(0, 100);
        expect(navbar).toBeVisible(); // Check if navbar is still visible
    });

    it('should include links to all major sections and a search box', () => {
        const links = ['Home', 'About', 'Services', 'Contact'];
        links.forEach(link => {
            expect(screen.getByText(link)).toBeInTheDocument();
        });
        expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    });

    it('should show search results when pressing enter', () => {
        const searchInput = screen.getByPlaceholderText('Search...');
        fireEvent.change(searchInput, { target: { value: 'test' } });
        fireEvent.keyPress(searchInput, { key: 'Enter', code: 'Enter' });
        // Assuming you have a function to handle search results
        // This would require a mock or a more complex setup
        expect(screen.getByText('Search results for "test"')).toBeInTheDocument();
    });

    it('should help users feel oriented with navigation options', () => {
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeVisible();
        expect(navbar).toHaveTextContent(/Home|About|Services|Contact/i);
    });
});