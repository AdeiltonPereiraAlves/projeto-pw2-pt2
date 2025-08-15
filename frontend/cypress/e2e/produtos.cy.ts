describe("Lista e Detalhe de Produtos", () => {
  beforeEach(() => {
    cy.visit("/"); // rota onde a lista de produtos está exposta
  });

  it("deve listar produtos e navegar para a página de detalhe", () => {
   
    cy.get(".grid").should("exist");

    
    cy.get(".grid a").first().click();

   
    cy.url().should("match", /\/produto\/\d+$/);

  
    cy.get("h2").should("exist");
    cy.contains("Adicionar ao Carrinho").should("be.visible");
  });

  it("deve adicionar produto ao carrinho lateral", () => {
 
    cy.visit("/");

   
    cy.get("button").contains("Comprar").first().click();

    
    cy.get('[data-cy="botao-carrinho"]').click();

   
    cy.get(".fixed.right-0").within(() => {
      cy.contains("Carrinho").should("be.visible");
      cy.get("img").should("have.attr", "src");
      cy.contains("Remover").should("be.visible");
    });
  });
});
