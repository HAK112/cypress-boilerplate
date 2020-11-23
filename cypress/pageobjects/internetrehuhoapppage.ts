import Basepage from "./Basepage";


const dragA = '#column-a';
const dragB = '#column-b';

// tslint:disable-next-line:class-name
class internetrehuhoapppage {


   visitsite(){
       cy.visit("https://the-internet.herokuapp.com/");
       // cy.title().should("contain",'herokuapp.com');
   }

    // tslint:disable-next-line:no-empty
    navigatetooptions(text:string){
     cy.get('a').contains(text).click();

    }
    validatecheckbox(){
       cy.get('form[id="checkboxes"]').children().last().should('be.checked');
    }
    clickoncheckbox(){
        cy.get('form[id="checkboxes"]').children().first().click();
        cy.get('form[id="checkboxes"]').children().first().should('be.checked');

    }
    rightclick(){
       cy.get('#hot-spot').rightclick();
       cy.on('window:alert',(txt)=>{
           expect(txt).to.contains("You selected a context menu");
       })
    }
    enterusername(usersn:string){
        cy.fixture("users").then(function (users) {
            this.user = users;
            // cy.visit(this.data.URL);
            cy.get('input[name="username"]').type(this.user[usersn].username);
        });

         // cy.get('input[name="username"]').type(usersn);
    }
    enterpassword(usersn:string){
        cy.fixture("users").then(function (users) {
            this.user = users;
            // cy.visit(this.data.URL);
            cy.get('input[name="password"]').type(this.user[usersn].password);
        });

        // cy.get('input[name="password"]').type(nonadmin.password);


    }
    clicksubmit(){

        cy.get('.radius').click();
    }

    openurlinnewtab(){
        cy.get('a[href="/windows/new"]')
            .invoke('removeAttr', 'target').click();

        // cy.get('a[href="/windows/new"]').click();
        // cy.get('a[href="/windows/new"]').should('have.attr', 'target', '_blank')
        // cy.wait(1000);
        cy.get("h3").contains("New Window").should("be.visible");
        cy.go('back');

    }
    dragdropfunction(){
        const dataTransfer = new DataTransfer;

        cy.get(dragA)
            .trigger('dragstart', { dataTransfer });

        cy.get(dragB)
            .trigger('drop', { dataTransfer });
        cy.get("div[id=\"column-a\"]").children().should('contain', 'B');
    }

}

export default internetrehuhoapppage;
