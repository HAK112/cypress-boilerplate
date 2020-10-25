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

}

export default internetrehuhoapppage;
