import React, {useState}from 'react'
import { Container, Wrapper } from './style'
import { Input, Button } from '../../componets/Generic'
import {useQuery, useMutation} from 'react-query'

const {REACT_APP_BASE_URL: url} = process.env;


export const Signin = () => {

 const [email, setEmail] = useState('')
 const [pw, setPw] = useState('')


 const {mutate} = useMutation(()=>{
   fetch(`${url}/public/auth/login`,{ method: 'POST',
   headers:{
     'Content-Type' : 'application/json',
   },
   body: JSON.stringify({email, passwords: pw}),
  }).then(res=>res.json());
  },
  {
    onSuccess:(res)=>{
    console.log(res, 'res');
  },
  onError:(res)=>{
    console.log(res, 'error');

    }
  }
  )


  const onSubmit = ()=>{
   console.log(email);
   console.log(pw);
   mutate()
  }
  return (
    <Container>
      <div className="title">Signin</div>
      <Wrapper>
      <Input 
      onChange={({target})=>setEmail(target?.value)} 
      value={email} placeholder={'Email'} />
      <Input 
      onChange={({target})=>setPw(target?.value)} 
      value={pw} placeholder={'passwords'} />
      <Button onClick={onSubmit} type={'secondary'}>Login</Button>
      </Wrapper>
    </Container>
  )
}

export default Signin
