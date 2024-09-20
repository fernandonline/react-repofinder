import styled from "styled-components"

export default function ItemRepo () {
    return (
        <ItemContainer>
            <h3>Teste</h3>
            <p>dio/fernando</p>
            <a href="#">ver repositorio</a> <br/>
            <a className="remover" href="#">remover</a>
            <hr/>
        </ItemContainer>
    )
}

const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 2rem;
        color: #fafafa;
    }

    p {
        font-size: 1rem;
        color: #fafafa60;
    }

    a.remover {
        color: #ff0000;
    }

    hr {
        color: #fafafa60;
        margin: 0.8rem 0;
    }
`