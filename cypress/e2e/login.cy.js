import LoginPage from '../support/pages/LoginPage';

describe('Formulario de Login - Abbaco', () => {

  beforeEach(() => {
    LoginPage.visit();
  });

  it('Mostrar los campos de login correctamente', () => {
    LoginPage.getUsername().should('be.visible');
    LoginPage.getPassword().should('be.visible');
    LoginPage.getContinueButton().should('be.visible');
    LoginPage.getForgotPasswordLink().should('be.visible');
    LoginPage.getSignUpLink().should('be.visible');
    LoginPage.getGoogleButton().should('be.visible');
  });

  it('No permitir login con campos vacíos', () => {
    LoginPage.submitLogin();
    cy.get('#username:invalid').should('exist');
    cy.get('#password:invalid').should('exist');
  });

  //it('No permitir login con email inválido', () => {
  //LoginPage.fillLoginForm('usuario-invalido', 'cualquierpass');
  //LoginPage.submitLogin();
  //cy.get('#username:invalid').should('exist');
 //});

  it('Permitir login con email y password válidos', () => {
    LoginPage.fillLoginForm('test@qa.com', 'Pass1234!');
    LoginPage.submitLogin();
  });

});
