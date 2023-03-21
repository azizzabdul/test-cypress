describe('petStore API Inventory Testing', () =>{
    it('Create a user', () => {
        let body = {
            "id" : 0,
            "username" : Cypress.env('username'),
            "firstName" : 'E@E',
            "lastName" : 'testing',
            "email" : 'testing@gmail.com',
            "password" : Cypress.env('password'),
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


    const loginUser = {
        method: 'GET',
        url: '/user/login',
        qs: {
            username: Cypress.env('username'),
            password: Cypress.env('password')
        }
    }
    it('Login registered user', () => {
        cy.request(loginUser).as('loginUser');
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.equal(200);
        })
    })
})