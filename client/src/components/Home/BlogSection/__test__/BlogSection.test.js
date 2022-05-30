import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import BlogSection from '../BlogSection';


const MockBlogSection = () => {
    return (
        <BrowserRouter>
            <BlogSection />
        </BrowserRouter>
    )
}

describe("BlogCard", () => {
    it('should render blogs and display them dynamic', async () => {
        render(
            <MockBlogSection />
        );
        const divDivElement = await screen.findByTestId("blog-preview-0")
        expect(divDivElement).toBeInTheDocument();
    });
})