import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
 margin-top: 96px;
`;

const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
 position: relative;
 margin-top: 32px;
/* width: 1440px; */
`; 

const Carousel = styled.div`
display: flex;
width: 1440px;
`;

const ArrowLeft= styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
top: 50%;
right: 20px;
transform: translate(-50%, -100%);
width: 45px;
height: 45px;
color: black;
background: white;
opacity: 0.5;
padding-left: 10px;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
filter:
drop-shadow(0px 20px 38px rgba(0,0,0,0.06))
drop-shadow(0px 7px 46px rgba(0,0,0,0.06))
drop-shadow(0px 8px 15px rgba(0,0,0,0.06));
border-radius: 50%;
cursor: pointer;
z-index: 999;
:hover{
    opacity: 1; 
}
:active{
    opacity: 0.7;
}
`;

const ArrowRight = styled(ArrowLeft)`
left: 20px;
transform: translate(50%, -100%);
padding-left: 0;
padding-right: 10px;
`;

const CategoryWrapper = styled.div`
display: flex;
width: 280px;
background: linear-gradient(0deg rgba(0,0,0, 0.65),rgba(0,0,0, 0.65),) url(.jpg);
box-shadow: 0px 20px 38px rgba(0,0,0, 0.6), 0px 8px 15px rgba(0,0,0, 0.6);
border-radius: 3px;
transform: matrix(-1,0,0,1,0,0);

`;

export {Container, Wrapper, Carousel, ArrowRight, ArrowLeft,CategoryWrapper}