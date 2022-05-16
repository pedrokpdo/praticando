import * as C from './styles'

export const GalleryItem = ({url}) => {
    return (
        <C.IMG width={300} height={250} src={url}></C.IMG>
    )
}