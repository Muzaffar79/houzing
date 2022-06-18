import styled from "styled-components";
import {ReactComponent as edit} from '../../assets/icons/edit.svg'
import {ReactComponent as trash} from '../../assets/icons/trash.svg'


const Container = styled.div`
display: flex;
width: 100%;
height: fit-content;
flex-direction: column;
padding: 24px 30px;

`;

const Wrapper = styled.div`
display: flex;
width: 1180px;
flex-direction: column;
justify-content: space-evenly;
margin: 0 130px;
margin-top: 34px;

`;

const Section =styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 34px;
`;


const Icons = styled.div`
cursor: pointer;
`;
Icons.Edit = styled(edit)`
cursor: pointer;
`;
Icons.Trash = styled(trash)`
cursor: pointer;
`;

const Header =styled.div`
display: flex;
width: 100%;
padding: 24px 0;
`;
Header.Title = styled.div`
display: flex;
justify-content: ${({ta})=> ta || 'center'};
flex: ${({fl})=> fl || 1};
`;

const Card = styled.div`
display: flex;
width: 100%;
flex-direction: column;

`;
Card.Wrapper = styled.div`
display: flex;
`;
const Title = styled.div`
display: flex;
flex: 4;
height: fit-content;
margin: 16px 0 ;

`;
const Img = styled.img`
width: 113px;
height: 113px;
object-fit: cover;
border-radius: 3px;
`;
const Info = styled.div`
display: flex;
width: 226px;
flex-direction: column;
justify-content: start;
justify-content: space-between;
margin-left: 16px;
margin-right: 24px;
`;
Title.Status = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 71px;
height: 23px;
background: black;
color: white;
border-radius: 3px;
font-size: 10px;
`;
const Date = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 2;
`;

const Status = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex: 1;

`;
const View = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 1;
`;

const Action = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
flex: 1;
`;
export {Container,Status,Date,Action, Img,Info, Wrapper, Title, Section,View,Card, Icons, Header}