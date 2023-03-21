it('Create a user', () => {
    let body = {
        "id" : 0,
        "username" : Cypress.env('username'),
        "firstName" : 'E@E',
        "lastName" : 'testing',
        "email" : 'testing@gmail.com',
        "password" : '123123',
        "phone" : '08954092730',
        "userStatus" : 0
    }
    console.log(body)
    cy.request('POST', '/user', body).as('createUser');
    // adds new user 
    cy.get('@createUser').then(createUser => {
        expect(createUser.status).to.equal(200);
    });
});