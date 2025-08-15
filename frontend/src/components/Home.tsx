import CarrinhoLateral from "./CartLateral";
import ListaProdutos from "./ListaProdutos";
import Pagina from "./Pagina";

export default function Home() {
  return (
    <Pagina>
      <ListaProdutos />
      <div>
        <CarrinhoLateral />
      </div>
      
    </Pagina>
  );
}
