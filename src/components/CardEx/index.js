import * as C from './styles'

export const CardEx = ({nome, id, descriçao, foco, img}) => {
    return (
        <C.Container key={id}>
            <h1>{nome}</h1>
            <span>{foco}</span>
            <p>{descriçao}</p>
            <img width={260} height={300} src={img}/>

        </C.Container>
    )
}