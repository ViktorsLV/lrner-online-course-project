import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import CategoriesSection from "../CategoriesSection";

const MockCategorySection = () => {
    return (
        <BrowserRouter>
            <CategoriesSection />
        </BrowserRouter>
    )
}

describe("CategoryCard", () => {
    it('should render all 12 categories', async () => {
        render(
            <MockCategorySection />
        );

        const categoryDivElement = await screen.findByTestId("category-item-11")
        expect(categoryDivElement).toBeInTheDocument();
    });

})