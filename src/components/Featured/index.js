import * as C from './styles'

export const Featured = () => {
    return (
        <C.Container>
            <C.Grid>
                <C.Info>
                    <div>
                        <h1>Titulo do Troço</h1>
                        <h2>subtitulo do troço</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <img width={500} src='https://www.pontotel.com.br/wp-content/uploads/2021/12/auxilio-academia.jpg'></img>
                    </div>
                </C.Info>
                <C.Form>
                    <div>
                        <p>First Name:</p>
                        <input type='text'></input>
                        <p>Last Name:</p>
                        <input type='text'></input>
                        <p>E-mail:</p>
                        <input type='email'></input>
                        <p>Password:</p>
                        <input type='password'></input>
                        <div>
                            <button>Prosseguir</button>
                            <button>Ja tenho Conta</button>
                        </div>
                    </div>
                </C.Form>
            </C.Grid>
        </C.Container>
    )
}