/* eslint-disable @typescript-eslint/no-explicit-any */
export type BotaoProps = {
    texto: string;
    icon?:any
    
}


export default function Botao(props: BotaoProps){
    return (
        <div className="w-full h-6 bg-green-300 p-6 flex items-center justify-center rounded-md hover:bg-green-400 hover:text-white" >
            {props.texto}
        </div>
    )

}