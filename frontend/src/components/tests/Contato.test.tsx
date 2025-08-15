import { render, screen, fireEvent } from "@testing-library/react";
import Contato from "../Contato";

describe("Contato", () => {
  test("deve preencher e enviar o formulário com sucesso", () => {
    render(<Contato />);

 
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument();

    
    fireEvent.change(screen.getByLabelText(/Nome/i), {
      target: { value: "João" },
    });

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "joao@email.com" },
    });

    fireEvent.change(screen.getByLabelText(/Mensagem/i), {
      target: { value: "Olá, gostaria de saber mais!" },
    });

   
    fireEvent.click(screen.getByRole("button", { name: /Enviar/i }));

   
    expect(
      screen.getByText(/Mensagem enviada com sucesso!/i)
    ).toBeInTheDocument();
  });
});
