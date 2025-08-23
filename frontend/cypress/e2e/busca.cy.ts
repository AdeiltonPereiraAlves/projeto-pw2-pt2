import { describe, beforeEach, it } from "vitest";

describe("Header - campo de busca", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deve permitir digitar no campo de busca", () => {
    cy.get('input[placeholder="Buscar produto..."]')
      .type("notebook")
      .should("have.value", "notebook");
  });

  it("deve filtrar produtos na tela ao digitar (integração com lista)", () => {
    cy.get('input[placeholder="Buscar produto..."]').type("Cadeira");

    // valida que algum card filtrado aparece
    cy.get(".grid").contains("Cadeira").should("exist");
  });
});
