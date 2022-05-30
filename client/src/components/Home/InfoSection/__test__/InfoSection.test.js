import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import InfoSection from '../InfoSection';

const MockCourseSection = () => {
    return (
        <BrowserRouter>
            <InfoSection />
        </BrowserRouter>
    )
}

describe("InfoSection", () => {
    it('should render 3 different info cards', async () => {
        render(
            <MockCourseSection />
        );

        const courseDivElement1 = await screen.findByText("Explore")
        expect(courseDivElement1).toBeInTheDocument();

        const courseDivElement2 = await screen.findByText("Choose")
        expect(courseDivElement2).toBeInTheDocument();

        const courseDivElement3 = await screen.findByText("Learn")
        expect(courseDivElement3).toBeInTheDocument();
    });
})