import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`

    width: 100%;
    height: 60px;
    background-color: #FFF;
    flex-direction: row;
    border-radius: 30px;
    border-width: 1px;
    border-color: #000;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    color: #000;
    font-size:20px;
`;

const Input = styled.TextInput`

flex: 1;
font-size: 16px;
color: #000;
margin-left: 10px;

`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {

    return (

        <InputArea>
            <IconSvg width="30" height="30" fill="#000000" ></IconSvg>
            <Input
            
                placeholder={placeholder}
                placeholderTextColor="#000000"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>

    );

}