// src/components/tests/Footer.test.tsx
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("deve renderizar o texto com o ano atual", () => {
    render(<Footer />);
    
    const anoAtual = new Date().getFullYear();
    const texto = `© ${anoAtual} Minha Loja. Todos os direitos reservados.`;

    expect(screen.getByText(texto)).toBeInTheDocument();
  });
});
