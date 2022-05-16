import * as C from './styles'
import { ex } from './mock'
import { CardEx } from '../CardEx'


export const Exercises = () => {
    return (

        <C.Container>
            <h1>Alguns De Nossos Melhores Exercicios</h1>
            <C.Grid>
                {ex.map((item) => (
                    <CardEx
                        nome={item.nome}
                        foco={item.foco}
                        descriçao={item.descriçao}
                        img={item.img}
                        id={item.id}
                    />
                ))}
            </C.Grid>
        </C.Container>


    )
}