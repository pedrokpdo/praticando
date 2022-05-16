import { GalleryItem } from '../GalleryItem'
import * as C from './styles'

export const Gallery = () => {
    return (
        <C.Container>
            <h1>Galeria de Fotos</h1>
            <C.Grid>
               <GalleryItem url='https://blog.meupersonalvirtual.com.br/wp-content/uploads/2019/04/284054-scheila-revisar-ate-0204-treino-na-academia-porque-fazer-exercicios-fisicos-na-academia-e-a-melhor-opcao.jpg'/>
               <GalleryItem url='https://blog.meupersonalvirtual.com.br/wp-content/uploads/2019/12/313233-quais-treinos-de-academia-sao-recomendados-para-voce.jpg'/>
               <GalleryItem url='https://blog.fiturban.com.br/wp-content/uploads/2018/10/242982-conheca-os-beneficios-em-se-fazer-academia-e-comece-ja.jpg'/>
               <GalleryItem url='https://www.recreiodajuventude.com.br/userfiles/redacao/posts/academia-campanha-1.jpg'/>
               <GalleryItem url='https://www.recreiodajuventude.com.br/userfiles/redacao/posts/academia1-1.jpg'/>
               <GalleryItem url='https://www.blog.nadarte.com/wp-content/uploads/2019/07/original-0195472dd2e7722948d9ae05f96ab8d8-1160x770.jpg'/>
            </C.Grid>
        </C.Container>
    )
}

