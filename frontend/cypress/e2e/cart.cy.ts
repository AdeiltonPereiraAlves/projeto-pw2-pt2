import { describe, beforeEach, it } from "vitest";

describe("Header - Cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deve abrir o carrinho ao clicar no ícone/botão", () => {
    // assume que Cart tem um botão para abrir
    cy.get("header").within(() => {
      cy.get("button").click();
    });

    // validação básica de abertura do carrinho
    cy.contains("Carrinho").should("exist"); // ajustar conforme seu componente
  });
});
