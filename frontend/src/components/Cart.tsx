// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { TbShoppingCart } from "react-icons/tb";
// import { useCarrinho } from "../context/CarrinhoContext";



// export default function Cart() {
//     const { abrirCarrinho, items } = useCarrinho();
//   return (
//     <div >
//       <div className="bg-red-500 rounded-2xl w-4 h-4 p-3 flex justify-center items-center absolute right-30 text-xs  ">{items.length}</div>
//      <button className="" onClick={abrirCarrinho}>
//          <TbShoppingCart size={35} />
//      </button>
//     </div>
//   );
// }
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TbShoppingCart } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { abrirCarrinho } from "../store/slices/carrinhoSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const itens = useSelector((state: RootState) => state.carrinho.itens);

  const totalItems = itens.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <div className="relative">
      {totalItems > 0 && (
        <div className="bg-red-500 rounded-full w-5 h-5 flex justify-center items-center absolute -top-2 -right-2 text-white text-xs font-bold">
          {totalItems}
        </div>
      )}

      <button onClick={() => dispatch(abrirCarrinho())} className="relative">
        <TbShoppingCart size={35} />
      </button>
    </div>
  );
}
