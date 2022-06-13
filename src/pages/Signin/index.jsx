import React, {useState}from 'react'
import { Container, Wrapper } from './style'
import { Input, Button } from '../../componets/Generic'
import {useMutation} from 'react-query'
import { useNavigate } from 'react-router-dom';

const {REACT_APP_BASE_URL: url} = process.env;


export const Signin = () => {

 const [email, setEmail] = useState('')
 const [pw, setPw] = useState('')
const navigate = useNavigate()
   
 const {mutate} = useMutation(()=>{
  return  fetch(`${url}/public/auth/login`,
   { method: 'POST',
   headers:{
     'Content-Type' : 'application/json',
   },
   body: JSON.stringify({email, password: pw}),
  }).then(res=>res.json());
  });

   
  const onSubmit = ()=>{
    mutate('hey', {
    onSuccess:(res)=>{
    localStorage.setItem('token', res?.authenticationToken);
     if (res?.authenticationToken)  navigate('/myproperties');
  },
  onError:(res)=>{
    console.log(res, 'error');

  }, 
  });
  };
  return (
    <Container>
      <div className="title">Signin</div>
      <Wrapper>
      <Input 
      onChange={({target})=>setEmail(target?.value)} 
      value={email} placeholder={'Email'} />
      <Input 
      onChange={({target})=>setPw(target?.value)} 
      value={pw} placeholder={'password'} />
      <Button onClick={onSubmit} type={'primary'}>Login</Button>
      </Wrapper>
    </Container>
  )
}

export default Signin
