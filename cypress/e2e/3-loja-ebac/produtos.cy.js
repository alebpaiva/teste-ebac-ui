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

it('Deve buscar um produto com sucesso', () => {
    let produto = 'Pierce Gym Short'
    produtosPage.buscarProduto(produto)
    cy.get('.product_title').should('contain' , produto)
});

it('Deve visitar a pagina do produto', () => {
    produtosPage.visitarProduto('aether-gym-pant')
});

it('Deve adicionar o produto no carrinho', () => {
    let qtd = 6
    produtosPage.buscarProduto('Aero Daily Fitness Tee')
    produtosPage.addProdutoCarrinho('M', 'Brown', qtd)

    cy.get('.woocommerce-message').should('contain' , qtd + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
});

it.only('Deve adicionar o produto no carrinho buscando da massa de dados', () => {
    cy.fixture('produtos').then(dados => {

        produtosPage.buscarProduto(dados[2].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[2].tamanho, 
            dados[2].cor, 
            dados[2].quantidade )
        cy.get('.woocommerce-message').should('contain' , dados[2].nomeProduto)
    })
    

});

});