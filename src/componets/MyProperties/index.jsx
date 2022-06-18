import React from 'react'
import { useMutation, useQuery } from 'react-query';
import { useHttp } from '../../hooks/useHttp'
import { Container, Section, Wrapper,Icons, Header, Card, Img, Title, Info, Status, Date, Action, View } from './style'
import nobackroundimg from '../../assets/img/noimg.jpg'
import { Button } from '../Generic';
import { useNavigate } from 'react-router-dom';
import { message, Popconfirm } from 'antd';


export const MyProperties = () => {
  
  const {request} = useHttp();
  const navigate = useNavigate();

  const {data, refetch} = useQuery('getMyProperties',
 ()=>{

    return request({url:'/v1/houses/me', token: true });
  });

  const {mutate} = useMutation((id)=>{
    return request({ url:`/v1/houses/${id}`, method: 'DELETE', token: true})
  })
  
  const confirm = (id) => {
      mutate(id, {
      onSuccess: (res) => {
       if (res?.success) {
        message.success('Deleted');
        refetch();
       }
      }
    });
  };
 

  return (
   <Wrapper>
    <Section>
    <div className="title">My Properties</div>
    <Button onClick={()=>navigate('/properties/addnew')} type={'primary'} width={'131px'} >Add New</Button>
    </Section>
    <Container>
      <Header>
        <Header.Title className='subtitle' fl={4} ta={'start'}>Listing Title</Header.Title>
        <Header.Title className='subtitle'fl={2}>Date Published</Header.Title>
        <Header.Title className='subtitle'>Status</Header.Title>
        <Header.Title className='subtitle'>View</Header.Title>
        <Header.Title className='subtitle'>Action</Header.Title>
       </Header>
       <Card>
       {
         data?.data?.map((value)=>(
          <Card.Wrapper>
            <Title>
          <Img src={value?.attachments[0]?.imgPath || nobackroundimg }/>
          <Info >
            <div>
            <div  className="subtitle">{value?.address}</div>
            <div  className="description">{value?.description}</div>
            </div>
           <div  className="subtitle">{`$${value?.price}/mo`}</div>
          </Info>
          <Title.Status>{value?.status? 'Sotiladi' : 'Sotildi'}</Title.Status>
         </Title>
         <Date>
           <div className='description'>30 December 2022</div>
         </Date>
         <Status>
           <div className='description'>Pending</div>
         </Status>
         <View>
           <div className='description'>5933</div>

         </View>
         <Action>
         <Icons.Edit onClick={()=>navigate(`/properties/addnew/:${value.id}`)} />
          <Popconfirm
               title="Uyni o'chirmoqchimiz"
               onConfirm={()=>confirm(value?.id)}
              >
             <Icons.Trash/>
       </Popconfirm>
         </Action>

       </Card.Wrapper>
            ))
         }
       </Card>
    </Container>

    </Wrapper>
  );
};

export default MyProperties
