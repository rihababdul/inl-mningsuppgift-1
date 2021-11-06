/// <reference types="cypress" />

//This is a test suite
describe('Inloggningsfunktionen', function(){
    //This is a test case
    it('Test case 1', function(){
      
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        // Testa inloggningsfunktionen
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
      

    })

    describe('Skapa en klient', function(){ 
      //Testa att skapa en klient
      it('Test case 2', function(){
      cy.get('.blocks > :nth-child(2) > .btn').click()
      cy.get('h2 > .btn').click()
      cy.get(':nth-child(1) > input').type('testName')
      cy.get(':nth-child(2) > input').type('test@test.com')
      cy.get(':nth-child(3) > input').type('0123456789')
      cy.get('.blue').click()

      })



 describe('Redigera uppgifter på en klient', function(){
        // Testa att redigera uppgifter på en klient
        it('Test case 3', function(){
        cy.contains('Clients')
        cy.get(':nth-child(1) > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()
        cy.get(':nth-child(5) > input').type('5')
        cy.get('.blue').click()
        //cy.contains('Jonas Hellman')
        //cy.get(':nth-child(2) > .action > img').click()
        //cy.get('.menu > :nth-child(1)').click()
        //cy.get(':nth-child(5) > input').type('5')

        

        })

 })
   
      })

      describe('Radera en klient', function(){
        //Testa att radera en klient
        it('Test case 4', function(){
        cy.get(':nth-child(3) > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.get(':nth-child(3) > .btn').click()

        })
        
    })


    describe('Lägg till en ny räkning', function(){
        //Lägg till en ny räkning
        it('Test case 5', function(){
        cy.get(':nth-child(3) > .btn').click()
        cy.get('h2 > .btn').click()
        cy.contains("New Bill")
        cy.get('input').type('1000')
        cy.get('.blue').click()
            

})

     describe('Redigera räkning från obetald till betald', function(){
     it('Test case 6', function(){
     cy.get(':nth-child(2) > .action').click()
     cy.get('.menu > :nth-child(1)').click()
     cy.get('.checkbox').click()
     cy.get('.blue').click()


     })


     })

    })
})

    
         

        
        



        // Backa och logga ut
        //cy.get(':nth-child(3) > .btn').click()
        //cy.get('.user > .btn').click()

    
