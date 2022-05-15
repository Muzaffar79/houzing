import { Carousel } from 'antd';
import styled from 'styled-components'
import { ReactComponent as arrow } from '../../../assets/icons/arrow.svg';

const Wrapper = styled.div`
position: relative;
`;


const Container = styled(Carousel)`
width: 100%;
/* height: 570px; */
`;

const Img = styled.img`
background: black;
width: 100%;
`;

const Icon = styled.div``;

Icon.Left = styled(arrow)`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
left: 0px;
transform: translate(100%, -100%);
width: 45px;
height: 45px;
color: white;
background: white;
padding: 12px;
opacity: 0.5;
border-radius: 50%;
z-index: 999;
cursor: pointer;
:hover{
    opacity: 0.97;
}
 path{
     fill: #0d263b;
 }
`;
Icon.Right = styled(arrow)`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
right: 0px;
transform: translate(-100%, -100%) rotate(180deg);
width: 45px;
height: 45px;
color: black;
background: white;
padding: 12px;
opacity: 0.5;
border-radius: 50%;
z-index: 999;
cursor: pointer;
:hover{
    opacity: 0.97;
}
 path{
     fill: #0d263b;
 }
`;


export { Container, Img, Icon, Wrapper}