const locator = require (',,/locator/LoginLocator'); 

class LoginPage {

	async visit() {
		cy.visit("https://kasirdemo.belajarqa.com")
	}

	async fillUsername(email){
		cy.get('#email').type('email');
	}

	async fillPassword(password){
		  cy.get('#password').type('password');
	}

	async clickLoginButton(){
		  cy.get('.chakra-button').click();
	}
}

// module.exports = new LoginPage();