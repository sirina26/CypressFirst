/// <reference types="cypress" />

const textLink = 'https://best.aliexpress.com/?lan=fr&spm=a2g0o.productlist.1000002.1.39b84730sqNj3P&gatewayAdapt=glo2fra';
const objectName = 'bague';
//nom de barre de recherche 
const searchBarName = ('#search-key');
const searchClick = ('#form-searchbar');
const itemClassName = ('._3GR-w');

describe('Home tests', ()=>{
  it('open the home page', () => {

    cy.visit(textLink);
    cy.contains('Accepter les cookies').click();
    //cy.title().should('eq', 'AliExpress - Magasinage en ligne pour les appareils électroniques populaires, la mode, la maison et le jardin, les jouets et les sports, les automobiles et plus.');
    //ecrire dans la barre de recherche
    cy.get(searchBarName).type(objectName);
    //cliquer pour chercher
    cy.get(searchClick).submit(); 
    //click 
    //cy.get(itemClassName).first().click();    
    
    //cy.contains('Acheter maintenant').click();
    // const deb = cy.get('._3GR-w').first().click();
    // cy.log(deb);
    cy.get('a').should('._3t7zg _2f4Ho');
  });
  // it('Advertise link should refer to item page', () => {
  //   //cy.get(searchClick).submit()
  //     cy.visit(cy.get(itemClassName).first());
  // }); 
});
