import styled from "styled-components";
import {ReactComponent as edit} from '../../assets/icons/edit.svg'
import {ReactComponent as trash} from '../../assets/icons/trash.svg'


const Container = styled.div`
display: flex;
justify-content: space-evenly;

`;

const Wrapper = styled.div`
display: flex;
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

const Table = styled.table`
border: none;
`;

const Tr = styled.tr`
margin: 5px 0;
height: 113px;
`;
const Th = styled.th`
border: 1px solid black;

`;
const Td = styled.td`
border: 1px solid black;
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


export {Container, Wrapper, Section,Table,Tr,Th,Td, Icons}