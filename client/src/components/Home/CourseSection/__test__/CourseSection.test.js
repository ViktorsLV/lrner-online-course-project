import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import CourseSection from '../CourseSection';

const MockCourseSection = () => {
    return (
        <BrowserRouter>
            <CourseSection />
        </BrowserRouter>
    )
}

describe("CategoryCard", () => {
    it('should render courses and have dynamic cards', async () => {
        render(
            <MockCourseSection />
        );

        const courseDivElement = await screen.findByTestId("course-card-1")
        expect(courseDivElement).toBeInTheDocument();

    });
})