import styled from "styled-components"

export default function Input ({value, onChange}) {
    return (
        <InputContainer>
            <input value={value} onChange={onChange}/>
        </InputContainer>
    )
}

const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    margin: 1rem;

    input {
        background: transparent;
        border: none;
        width: 100%;
        height: 100%;
        padding: 0 0.3rem;
        color: #fff;
        font-size: 20px;
    }
`