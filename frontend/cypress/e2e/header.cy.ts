import { describe, beforeEach, it } from "vitest";

// cypress/e2e/header.cy.ts
describe("Header - links de navegação", () => {
  beforeEach(() => {
    cy.visit("/"); // ajusta conforme rota inicial da sua aplicação
  });

  it("deve exibir os links principais", () => {
    cy.get("header").within(() => {
      cy.contains("Minha Loja").should("exist");
      cy.contains("Início").should("exist");
      cy.contains("Dashboard").should("exist");
      cy.contains("Contato").should("exist");
    });
  });

  it("deve navegar para a página Dashboard ao clicar no link", () => {
    cy.contains("Dashboard").click();
    cy.url().should("include", "/dashboard");
  });

  it("deve navegar para a página Contato ao clicar no link", () => {
    cy.contains("Contato").click();
    cy.url().should("include", "/contato");
  });
});
