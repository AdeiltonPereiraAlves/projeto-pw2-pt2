/* eslint-disable @typescript-eslint/no-explicit-any */
export  interface PaginaProps{
   children?: any

}


export default function Pagina(props: PaginaProps){
    return(
        <div className="m-auto flex justify-center items-center mt-10">
            {props.children}
        </div>
    )
}