class Basepage {
  static pause(milliseconds: number) {
    cy.wait(milliseconds);
  }
}
export default Basepage;
