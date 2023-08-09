import React, {useState} from 'react';
import {
  Container,
  Logo,
  AreaInput,
  Input,
  Background,
  SubmitButton,
  SubmitText,
  Titulo,
} from '../style/StyledComponents';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  return (
    <Background>
      <Container>
        <Logo source={require('../Assets/Img/Logo.png')} />
        <Titulo>Money Three</Titulo>
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChange={text => setNome(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChange={text => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={senha}
            onChange={text => setSenha(text)}
          />
        </AreaInput>
        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
