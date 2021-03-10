import styled from 'styled-components';
import { Layout, Radio } from 'antd';
const { Sider } = Layout;




export const StyledLayout = styled(Layout)`
    width:10%;
    height:100%;
    margin-top:50px;
`;

export const StyledSider = styled(Sider)`
    height:100%;
    background:white;
    border-right: #edebef solid 1px;
    border-top: #edebef solid 1px;
    border-bottom: #edebef solid 1px;

`;

export const StyledRadioGroup = styled(Radio.Group)`
    display:flex;
    flex-direction:column;
    margin-left:50px;
`;
