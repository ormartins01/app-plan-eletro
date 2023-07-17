import styled from "styled-components";

export const InputStyle = styled.input`
    width: 95%;
    height: 39px;
    background-color: #343B41;
    border: 1px solid #F8F9FA;
    border-radius: 4px;
    padding: 5px;
    color: #FFFFFF;

    form {
        width: 85%;
        height: 60%;
        margin-top: -10px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    label {
        width: 90%;
        text-align: left;
        font-size: 10px;
        color: #F8F9FA;
    }

    .errors{
        width: 90%;
        text-align: left;
        margin-top: -10px;
        padding-bottom: 10px;
        font-size: 10px;
        color: #E83F5B;
    }
    
`;