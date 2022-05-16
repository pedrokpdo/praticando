import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    background-color: whitesmoke;

`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    height: 555px;
`

export const Form = styled.div`
    div{
        padding: 10px;
        input{
            height: 22px;
        }
        p{
            font-size: 23px;
        }
        div{
            margin-left: -10px;
            margin-top: 30px;
            button{
                padding: 10px;
                border-radius: 10px;
                margin: 0 3px;
            }
        }
    }
`

export const Info = styled.div`
    div{
        width: 700px;
        padding: 10px;
        img{
            margin-left: 40px;
        }
        h1{
            margin-left: 40px;
        }
        h2{
            margin-left: 80px;
        }

    }
`