it ('Should check 5+2 equals 7', () => {
    
    
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.get('#five').click();
    cy.get('#plus').click();
    cy.get('#two').click();
    cy.get('#equals').click();

    cy.get('#bottomLine').should('contain', '7')
    
    cy.get('#allClear').click();

    cy.get('#six').click();
    cy.get('#times').click();
    cy.get('#three').click();
    cy.get('#minus').click();
    cy.get('#four').click();
    cy.get('#equals').click();
    cy.get('#bottomLine').should('contain', '14')

    cy.get('#allClear').click();
    cy.get('#four').click();
    cy.get('#two').click();
    cy.get('#three').click();
    cy.get('#del').click();
    cy.get('#bottomLine').should('contain', '42')
    cy.get('#divide').click();
    cy.get('#six').click();
    cy.get('#plus').click();
    cy.get('#two').click();
    cy.get('#equals').click();
    cy.get('#bottomLine').should('contain', '9')
    cy.get('#darkMode').click();
})