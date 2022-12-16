const locators = require("../fixtures/locators.json")

describe("login test",() => {
    it("login with valid credentials", () => {
        cy.visit("/");
        cy.get(locators.login.emailInput).type('devcicmilos91@gmail.com');
        cy.get("input[name='password']").first().type('Somborac91');
        cy.get('button[type="submit"]').click();
        cy.url().should("include", "/my-organizations");
        cy.url().should("not.include", "/login");
        
    })
})