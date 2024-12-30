import {Given , When , Then}  from "cypress-cucumber-preprocessor/steps";

    Given('The user navigate to magento website', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
    })

    When("Click on Whats New menu", () => {

        cy.get("#ui-id-3").click();
    })
    Then("Print all categories in new in women section", () => {
     cy.get('.item').then((categories) => {
     
        for (let i = 0; i < categories.length; i++) {
        cy.wrap(categories[i])
        .invoke('text')
        .then((categories)=>{
          
        cy.log(categories);
          

        })
    }
}
    )}
    )




    
    ;
        
   ;