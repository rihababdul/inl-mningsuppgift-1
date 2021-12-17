

const logoutButton = '.user > .btn'


function logout(cy){
    cy.get(logoutButton).click()
}

//exports

module.exports = {
    logout
}