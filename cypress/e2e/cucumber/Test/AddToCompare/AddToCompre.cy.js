import {Given , When , Then}  from "cypress-cucumber-preprocessor/steps";
    Given('The user navigate to magento website', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
    })
    When("The user types shirt in search input field", () => {
       
        cy.get("#search").type("shirt"+"{enter}");})

        When("The user chooese  the Circe hooded Ice Fleece", () => {
       
        cy.contains("a","Circe Hooded Ice Fleece").click(); })
        
    
        When("The user click on add to compare", () => {
            

        cy.get(".product-addto-links").find("a").last().click()
    })
        Then ("The product add to copmare successfully", ()=>{

        cy.get("[role=alert]").should("be.visible").and("contain","You added product Circe Hooded Ice Fleece to the comparison list.")
    });
