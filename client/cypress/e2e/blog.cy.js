describe('endtoend user reading blog', () => {
  it('visits the site first time, and clicks on log in', () => {
    cy.visit('http://localhost:3000/')
    cy.findByText(/log in/i)
      .should('be.visible')
      .click()
      cy.wait(1500)
  })

  it('fake logs in',() => {
    cy.findByText(/go back/i)
      .click()
      .wait(1000)
  })

  it('scrolls to bottom', () => {
    cy.scrollTo('bottom', {duration: 2000})
  })

  it('should see all sections', () => {
    cy.findByRole('heading', {  name: /our learning opportunity/i})
    .should('be.visible')


    cy.findByRole('heading', {  name: /categories/i})
      .should('be.visible')

    cy.findByRole('heading', {  name: /latest courses/i})
      .should('be.visible')

    cy.findByRole('heading', {  name: /top courses/i})
      .should('be.visible')

    cy.findByRole('heading', {  name: /read our blog posts/i})
      .should('be.visible')
  
  })  

  it('should see 12 categories', () => {
    cy.findByTestId('category-item-11')
  })

  it('should see at least one course', () => {
    cy.findByTestId('course-card-0')
  })

  it('should see at least one blog', () => {
    cy.findByTestId('blog-preview-0')
  })

  it('scrolls back up', () => {
    cy.scrollTo('top', {duration: 2000})
  })

  it('clicks and goes to the blog', () => {
    cy.findByRole('link', {  name: /blog posts/i})
      .click()
  })

  it('scrolls to bottom', () => {
    cy.scrollTo('bottom', {duration: 2000})
  })

  it('should see big title', () => {
    cy.get('h1').should('be.visible')
  })

  it('should render all 7 category links', () => {
    cy.findByTestId('category-navigation-6')
  })

  it('should have Articles section', () => {
    cy.findByRole('heading', {  name: /articles/i})
  })

  it('scrolls back up', () => {
    cy.scrollTo('top', {duration: 2000})
  })
  
  it('clicks on soft skills', () => {
    cy.findByRole('link', {  name: /soft skills/i})
      .click()
      .wait(3000)
  })

  it('should render soft skills articles', () => {
    cy.findAllByText(/soft skills/i)
      .should('have.length.above', 1)

      cy.findByTestId('article-preview-0')
      .wait(1500)
  })

  it('clicks and goes to the article', () => {
    cy.findByTestId('article-preview-0')
      .click()
      .wait(1000)
  })

  it('scrolls to bottom', () => {
    cy.scrollTo('bottom', {duration: 2000})
  })

  
  it('should see article, and its title and author', () => {
    cy.get('h1').should('be.visible')

    cy.findByTestId('article-author')
      .should('be.visible')
  })
    
})