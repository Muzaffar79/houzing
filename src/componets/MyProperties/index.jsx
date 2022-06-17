import React, {useState} from 'react'
import { useMutation, useQuery } from 'react-query';
import { useHttp } from '../../hooks/useHttp'
import { Container, Section, Wrapper, Table, Tr, Th, Td, Icons } from './style'

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
    <div className="title">Properties</div>
    <Button onClick={()=>navigate('/properties/addnew')} type={'primary'} width={'131px'} >Add New</Button>
    </Section>
   <Table>
    <thead>
    <Tr>
      <Th>Listing Title</Th>
      <Th>Published Date</Th>
      <Th>Status</Th>
      <Th>View</Th>
      <Th>Action</Th>
    </Tr>
    </thead>
    <tbody>
       {
      data?.data?.map((value)=>{
        return (
          <Tr key={value.id}>
            <Td>{value?.address}</Td>
            <Td>{new Date().getFullYear()}</Td>
            <Td>{value?.status? 'Sotilmadi' : 'Sotildi'}</Td>
            <Td>12345</Td>
            <Td>
              <Container>
                <Icons.Edit onClick={()=>navigate(`/properties/addnew/:${value.id}`)} />
          <Popconfirm
               title="Uyni o'chirmoqchimiz"
               onConfirm={()=>confirm(value?.id)}
              //  onCancel={cancel}
              //  okText="Yes"
              //  cancelText="No"
  >
             <Icons.Trash/>
       </Popconfirm>
              </Container>
            </Td>
          </Tr>
        )
      })}
    </tbody>
    </Table>
   </Wrapper>
  );
};

export default MyProperties
