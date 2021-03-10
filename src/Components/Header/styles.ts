import styled from 'styled-components';
import MyntraLogo from "../../assets/Myntra_logo.png";
import { Menu, Select } from 'antd';


export const Container = styled.div`
    position:sticky;
    background-color:white;  
    height:70px;
`;

export const DesktopLogo = styled.img.attrs({
        src: `${MyntraLogo}`
    })`
    height:80px;
    width:110px;
    vertical-align:middle;
    display: inline;
    padding:10px 10px 10px 0px;
`;

export const HeaderButton = styled.button`
    width:fit-content;
    object-fit:contain;
    border:none;
    background:none;
    margin-right:20px;
`;

export const HeaderButtonIcon = styled.img.attrs({
    src: `${MyntraLogo}`
})`
    width:60%;
    height:100%;
`;


export const HeaderButtonText = styled.div`
    width:100%;
    height:100%;
`;

export const HeaderIconButton = styled.button`
    flex-direction:column;
    display:inline-block;
    height:20px;
    width:80px;
    border:none;
    background:none;
    float:right;
    margin-top:10px;
`;


export const StyledSelect = styled(Select)`
    width: 300px;
    margin-left:190px;
`;



