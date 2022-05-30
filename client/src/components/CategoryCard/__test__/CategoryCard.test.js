import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import CategoryCard from '../CategoryCard';


const MockCategoryCard = () => {
    return (
        <BrowserRouter>
            <CategoryCard />
        </BrowserRouter>
    )
}

describe("CategoryCard", () => {
    it('should render category card', async () => {
        render(
            <MockCategoryCard />
        );

        const categoryDivElement = await screen.findByTestId("category-card")
        expect(categoryDivElement).toBeInTheDocument();
    });


    it('category card should be visible to the user', async () => {
        render(
            <MockCategoryCard />
        );

        const categoryDivElement = await screen.findByTestId("category-card")
        expect(categoryDivElement).toBeVisible();

    });





})