describe("Formulário de Contato", () => {
  beforeEach(() => {
    cy.visit("/contato"); // ou "/" se o componente Contato estiver na rota raiz
  });

  it("deve preencher e enviar o formulário com sucesso", () => {
  
    cy.get('input[name="nome"]').type("Maria da Silva");
    cy.get('input[name="email"]').type("maria@example.com");
    cy.get('textarea[name="mensagem"]').type("Olá, preciso de mais informações.");

    
    cy.get('button[type="submit"]').click();

   
    cy.contains("Mensagem enviada com sucesso!").should("be.visible");

 
    cy.get('input[name="nome"]').should("have.value", "");
    cy.get('input[name="email"]').should("have.value", "");
    cy.get('textarea[name="mensagem"]').should("have.value", "");
  });
});
