import styled from "styled-components"

export default function ItemRepo ({repo}) {
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel="noreferrer" target="_blank">ver repositorio</a> <br/>
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
        margin-bottom: 0.5rem;
    }

    a {
        text-decoration: none;
        color: #AAFF00;
    }

    a.remover {
        color: #ff0000;
    }

    hr {
        color: #fafafa60;
        margin: 0.8rem 0;
    }
`