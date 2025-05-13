// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// here will run this test automatically
describe('login / logout flow specification', () => {
  it('cannot navigate to /profile-sg without being logged in', () => {
    cy.visit("/profile-sg")
    .url().should('include', "/login");
  });

  it('rejects a login attempt by an invalid github user: !!!', () => {
    cy.visit("/login")
    .get('input[name="username"]').type("!!!").type("{enter}")  // here it'll put username "!!!", and hit enter
    .url().should('include', "/login");  // here it'll reject in 1 process before bcz there are not username call "!!!"
  });

  it('successfully authenticates a valid github user: test-account and logs out', () => {  // here will try to login successfully again
    cy.visit("/login")
    .get('input[name="username"]').type("test-account").type("{enter}")  // will put username "test-account"
    .url().should('include', '/profile-sg')  // here it'll include profile-sg of the user
    .get("nav").contains("Logout").click()  // will navigate to logout
    .url().should('include', "/login");  // here should show again login page
  });
});