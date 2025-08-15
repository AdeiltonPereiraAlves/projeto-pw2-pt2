/* eslint-disable @typescript-eslint/no-explicit-any */
import { TbShoppingCart } from "react-icons/tb";
import { useCarrinho } from "../context/CarrinhoContext";



export default function Cart() {
    const { abrirCarrinho, items } = useCarrinho();
  return (
    <div >
      <div className="bg-red-500 rounded-2xl w-4 h-4 p-3 flex justify-center items-center absolute right-30 text-xs  ">{items.length}</div>
     <button className="" onClick={abrirCarrinho}>
         <TbShoppingCart size={35} />
     </button>
    </div>
  );
}
