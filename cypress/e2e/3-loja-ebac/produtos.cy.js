/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: produtos', () => {
   
    beforeEach(() => {
        produtosPage.visitarUrl()   
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Apollo Running Short')

        cy.get('#tab-title-description > a').should('contain' , 'Descrição')

    });

it.only('Deve buscar um produto com sucesso', () => {
    let produto = 'Pierce Gym Short'
    produtosPage.buscarProduto(produto)
    cy.get('.product_title').should('contain' , produto)
});

it('Deve visitar a pagina do produto', () => {
    
});

it('Deve adicionar o produto no carrinho', () => {
    
});

});