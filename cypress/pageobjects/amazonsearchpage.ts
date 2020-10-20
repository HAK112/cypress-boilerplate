import Basepage from "./Basepage";

const searchtextfield = "#twotabsearchtextbox";
const addtocarticon = 'input[value="Add to Cart"]';
const oneplusphoneslink = 'a[href*="OnePlus-"]';
const priceonlist = ".a-offscreen";
const priceindetail = "#priceblock_ourprice";
const carticon = 'a[class="nav-a nav-a-2"]';
const brandphone = 'li[aria-label="HTC"]';

class Amazonsearchpage {
  // Navigate to Amazon page
  visitamazonpage() {
    cy.fixture("data").then(function (data) {
      this.data = data;
      cy.visit(this.data.URL);
    });
    cy.title().should("contain", "Amazon.com");
  }
  // Search for One Plus Phones
  searchphone(text: string) {
    cy.get(searchtextfield).type(`${text}{enter}`, { force: true });
  }
  // Verify price on search List
  priceonsearchlistpage(price: string) {
    cy.get(priceonlist).contains(price).should("be.visible");
  }
  // Navigate to Phone from search results
  clickonphonedetails(text: string) {
    // cy.get('.a-offscreen').contains('598').should('be.visible')
    cy.get('h2').children().children().contains(text).click({force:true});
    cy.wait(5000);
    cy.get(addtocarticon).should("be.visible");
  }

  navigatetoonephone() {
    cy.get(oneplusphoneslink)
      .contains("OnePlus-Interstellar-Unlocked-Android-Smartphone")
      .click();
    cy.get(addtocarticon).should("be.visible");
  }
  // verify the price
  verifypriceonbothpages(price: string) {
    // var pricetag = cy.get(oneplusphoneslink).contains(phone).next().next('.a-offscreen');
    // cy.log("Cost of Phone"+pricetag);

    cy.get(priceindetail).contains(price).should("be.visible");

    // cy.get(priceonlist).and(priceindetail).should('eq' , price)
  }
  // Verify your cart is empty
  emptycart() {
    cy.get(carticon).click({ force: true });
    cy.wait(2000);
    cy.get("h2").contains("Your Amazon Cart is empty").should("be.visible");
  }
  // Click on Add to Cart
  addtocart() {
    cy.get(addtocarticon).click();
    cy.wait(2000);
  }
  // Verify Items added to Cart
  verifyitemsaddedtocart() {
    cy.get("h1").contains("Added to Cart").should("be.visible");
  }
  // Select Branded phones and filter options from left panel
  Selectbrandfilter(text: string) {
    const filtervalue = text.split(";");
    for (let i = 0; i < filtervalue.length; i++) {
      cy.get("li[aria-label='"+ filtervalue[i] +"']").children().children().children().children().children('input[type="checkbox"]').click({ force: true });
    }


  }
}
export default Amazonsearchpage;
