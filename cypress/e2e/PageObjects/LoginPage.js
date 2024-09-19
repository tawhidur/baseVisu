class Login
{

    setUserName(username)
    {
        cy.get('input[name="username"]').type("tawhidur");
    }

    setPassword(password)
    {
        cy.get('input[name="password"]').type("Test@1122");
    }

    clickSubmit()
    {
        cy.get(".login-footer").children().last().click();
    }

    verifyLogin()
    {
        cy.contains('BaseVisu').should('be.visible');
    }

}

export default Login;