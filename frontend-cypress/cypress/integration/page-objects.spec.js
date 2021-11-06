/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'

// Test suite
describe('Test suite - with page objects', function(){

    beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)

    })

   
    it('Perform login', function(){
        dashboardFuncs.loginUser(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardFuncs.createClient(cy)
        dashboardFuncs.editClient(cy)
        dashboardFuncs.deleteClient(cy)
        dashboardFuncs.addBill(cy)
        dashboardFuncs.editBill(cy)  

    })

})


     

        it('Redigera en klient'), function(){
            indexFuncs.editClient(cy)
            cy.get(editBtn).click()
            cy.get(editButton).click()
            dashboardFuncs.editClient(cy)



        }
    
        
    
    
    

   

 

    

    


