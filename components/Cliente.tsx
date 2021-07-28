interface ClienteProps{
    name: string
    idade?:number
}

export default (props: ClienteProps) => {
    return (
        <div>
            <div>Nome: {props.name}</div>
            <div>Idade: {props.idade ?? 'Não informado'}</div>
        </div>        
    )
}