import styled from 'styled-components'
import { ReactComponent as bed} from '../../assets/icons/bed.svg';
import { ReactComponent as bath} from '../../assets/icons/bath.svg';
import { ReactComponent as garage} from '../../assets/icons/car.svg';
import { ReactComponent as ruler} from '../../assets/icons/ruler.svg';
import { ReactComponent as love} from '../../assets/icons/love.svg';
import { ReactComponent as resize} from '../../assets/icons/bed.svg';


const Container = styled.div`
 display: flex;
 flex-direction:column;
 max-width: 380px;
 min-width: 280px;
 height: 430px;
 background: #ffffff;
 border: 1px solid #e6e9ec;
 border-radius: 3px;

`;

const Img = styled.img`
min-height: 220px;
max-height: 220px;
width: 100%;
`;

const InfoWrapper = styled.div`
display: flex; 
flex-direction: column;
padding: 25px;
border: 1px solid #e6e9ec;
`;

const Info = styled.div`
display: flex;
justify-content: space-between;
`;

Info.Detail = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;



export  {Container, Img, InfoWrapper, Info}