import styled from "styled-components";

export const InputField = styled.input`
background: inherit;
outline:none;
border:none;
color:#fff;
font-size:18px;
box-sizing: border-box;
padding:0;
margin:4px 0;
`;
export const InputContainer = styled.div`
background-color: #131313;
color: white;
padding:12px 16px;
border-radius:10px;
width:100%;
box-sizing:border-box;
`;
export const InputLabel = styled.label`
color:#8f8f8f;
display:block;
font-size:14px;
margin:4px 0;
`;
export const Button = styled.button`
width:100%;
background-color:#54109c;
color:#fff;
outline:none;
border:none;
font-size:14px;
border-radius:10px;
padding:25px;
font-weight:500;
transition:300ms background-color ease;
&:hover{ 
    cursor:pointer;
    background-color:#6826ae;
}
`;
export const Page = styled.div`
height:100%;
display:flex;
justify-content:center;
align-items:center;
`;