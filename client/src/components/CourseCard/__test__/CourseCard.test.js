import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import CourseCard from '../../CourseCard';



const MockCourseCard = () => {
    return (
        <BrowserRouter>
            <CourseCard />
        </BrowserRouter>
    )
}

//only finding lessons cus its static..
describe("CourseCard", () => {
    it('should have lessons', async () => {
        render(
            <MockCourseCard/>
        );

        const cardDivElement = await screen.findByText(/lessons/i)
        expect(cardDivElement).toBeInTheDocument();
    });







})