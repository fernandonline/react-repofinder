import styled from "styled-components"

export default function Button ({onClick}) {
    return (
        <ButtonContainer onClick={onClick}>
            buscar
        </ButtonContainer>
    )
}

const ButtonContainer = styled.button`
    background-color: #FAFAFA;
    border: none;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    font-size: 1.5rem;
    margin-top: -1rem;
    &:hover {
        background-color: #FAFAFA40;
        cursor: pointer;
    }
`