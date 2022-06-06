import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import CourseCard from '../CourseCard';

const MockCourseCard = () => {
    return (
        <BrowserRouter>
            <CourseCard />
        </BrowserRouter>
    )
}

describe("CourseCard", () => {
    it('should have lessons', async () => {
        render(
            <MockCourseCard />
        );

        const cardDivElement = await screen.findByText(/lessons/i)
        await waitFor(() => expect(cardDivElement).toBeInTheDocument());
    });
})