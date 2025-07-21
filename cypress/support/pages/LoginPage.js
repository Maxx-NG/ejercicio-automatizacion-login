class LoginPage {
  visit() {
    cy.visit('http://localhost:8080/Web_Ejercicio.html');
  }

  getUsername() {
    return cy.get('#username');
  }

  getPassword() {
    return cy.get('#password');
  }

  getContinueButton() {
    return cy.get('button[data-action-button-primary="true"]');
  }

  getForgotPasswordLink() {
    return cy.contains('a', 'Forgot password?');
  }

  getSignUpLink() {
    return cy.contains('a', 'Sign up');
  }

  getGoogleButton() {
    return cy.contains('button', 'Continue with Google');
  }

  fillLoginForm(username, password) {
    this.getUsername().type(username);
    this.getPassword().type(password);
  }

  submitLogin() {
    this.getContinueButton().click();
  }
}

export default new LoginPage();
