import { render, screen } from '@testing-library/react';
import BaseButton from '../BaseButton';

describe("BaseButton", () => {
    it('should render same text passed into text prop', () => {
        render(
            <BaseButton text="test" />
        );
        const textElement = screen.getByText(/test/i);
        expect(textElement).toBeInTheDocument();
    });
})