describe('endtoend user getting course', () => {
  it('visits the site first time, and clicks on log in', () => {
    cy.visit('http://localhost:3000/')
    cy.viewport(1024, 768)
    cy.findByText(/log in/i)
      .should('be.visible')
      .click()
      cy.wait(4000)
  })

  it('fake logs in',() => {
    cy.findByText(/go back/i)
      .click()
      .wait(2000)
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
      .wait(2000)
  })
  
  it('clicks and goes to the category', () => {
    cy.findByTestId('category-item-1')
      .click()
      .wait(1000)
  })

  it('scrolls to bottom', () => {
    cy.scrollTo('bottom', {duration: 2000})
  })


  it('sees the photography category h1', () => {
    cy.get('h1')
      .contains('Courses')
      .should('be.visible')
  })

  it('should have featured courses section', () => {
    cy.findByRole('heading', {  name: /featured courses/i})
  })

  it('scrolls back up', () => {
    cy.scrollTo('top', {duration: 2000})
      .wait(2000)
  })

  it('should see the course cards', () => {
    cy.findByTestId('course-card-0')
      .should('be.visible')
  })

  it('should be redirected to the course', () => {
    cy.findByTestId('course-card-0')
    .click()
    .wait(1000)
  })

  it('should see the course card(title, price, add to cart)', () => {
    cy.get('h3').should('be.visible')
    cy.get('h1').contains('$')
    cy.findByText(/add to cart/i)
  })

  it('scrolls to bottom', () => {
    cy.scrollTo('bottom', {duration: 2000})
  })

  it('should see what youll learn static section', () => {
    cy.findByRole('heading', {  name: /what you'll learn \(static section\)/i})
    .wait(1000)
  })

  it('should see static course chapters', () => {
    cy.findByRole('heading', {  name: /course content \(static section\)/i})
    .wait(1000)
  })

  it('should see course description', () => {
    cy.findByRole('heading', {  name: /description/i})
    
    cy.findByTestId('course-description')
    .wait(1000)

  })

  it('should see Similar courses section', () => {
    cy.findByRole('heading', {  name: /similar courses/i})
    .wait(1000)

  })

  it('should see few similar courses rendered', () => {
    cy.findByTestId('similar-courses-0')
  })



  it('scrolls back up', () => {
    cy.scrollTo('top', {duration: 2000})
  })

  //Likes the course
  //Goes to the liked courses
  //Clicks on liked course
  //Adds course to the cart
  //Goes to cart
  //Sees that course in the cart
  //Proceeds to checkout
  //Checks the price and chooses payment method
  //Completes payment
  //Goes to profile
  //Checks the order history
  //Goes to owned courses
  //Clicks the course
  //Starts learning


})