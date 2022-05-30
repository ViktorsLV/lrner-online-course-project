import { render, screen } from '@testing-library/react';
import Header from '../Header';



describe("Header", () => {
    it('should render same text passed into text prop', () => {
        render(
            <Header />
        );
        const textElement = screen.getByText(/own/i);
        expect(textElement).toBeInTheDocument();
    });

    it('should have text own', () => {
        render(
            <Header />
        );
        expect(screen.getByText(/own/i)).toBeInTheDocument();
    })
})