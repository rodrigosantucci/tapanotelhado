import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView `
background-color: #FFF;
flex: 1;
justify-content: center;
align-items: center;
`;


export const InputArea = styled.View `
    padding: 40px;
    width:100%;
`;

export const CustomButton = styled.TouchableOpacity`

    height: 60px;
    background-color: #FFF;
    border-color: #000;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    border-width:1px;
 
`;

export const CustomButtonText = styled.Text`

    font-size: 18px;
    color: #000;
    font-weight:bold;
`;


export const SignMessageButton = styled.TouchableOpacity `

    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
`;
export const SignMessageButtonText = styled.Text `

font-size:16px;
color:#000;

`;
export const SignMessageButtonTextBold = styled.Text `

    font-size: 16px;
    color: #000;
    font-weight: bold;
    margin-left: 5px;

`;

