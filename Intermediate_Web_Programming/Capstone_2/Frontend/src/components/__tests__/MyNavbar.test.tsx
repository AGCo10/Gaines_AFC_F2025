import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {MyNavbar} from '../MyNavbar'; // Adjust the import based on your file structure

describe('Navbar Component', () => {
    beforeEach(() => {
        render(<MyNavbar />);
    });

    it('should remain visible when scrolling', () => {
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
        // This will simulate scrolling (Dont have enough webpage yet to really scroll through, but who knows!)
        window.scrollTo(0, 100);
        expect(navbar).toBeVisible(); // Check if navbar is still visible
    });

    it('should include links to all major sections and a search box', () => {
        const links = ['Home', 'Inventory'];
        links.forEach(link => {
            expect(screen.getByText(link)).toBeInTheDocument();
        });
        expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    });

});