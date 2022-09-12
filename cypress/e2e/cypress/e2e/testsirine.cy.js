/// <reference types="cypress" />

const textLink = 'https://best.aliexpress.com/?lan=fr&spm=a2g0o.productlist.1000002.1.39b84730sqNj3P&gatewayAdapt=glo2fra';
const objectName = 'chaussure';
const searchBarId = ('#search-key');
const searchButtonId = ('#form-searchbar');
const itemClassName = ('._3t7zg._2f4Ho');

describe('Home tests', ()=>{
  it('open the home page', () => {
    //vist the site
    cy.visit(textLink);
  });

  it('search a category', () => {
    //write on the search bar
    cy.get(searchBarId).type(objectName);
    //click to search
    cy.get(searchButtonId).submit();
    cy.contains('Accepter les cookies').click();
  }); 

  it('choose the first item', () => {
    //click on the first item  
    cy.get(itemClassName).first().should('have.attr', 'href')
    .then((href) => {
      cy.visit(href)
    });
  });  
});
