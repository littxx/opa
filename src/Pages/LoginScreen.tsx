import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../contexts/AuthContext';
import {
  Container,
  Logo,
  AreaInput,
  Input,
  Background,
  SubmitButton,
  SubmitText,
  LinkButton,
  LinkText,
  Titulo,
} from '../style/StyledComponents';

export default function LoginScreen() {
  const navega = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const {user} = useContext(AuthContext);

  return (
    <Background>
      <Container>
        <Logo source={require('../Assets/Img/Logo.png')} />
        <Titulo>Money Three</Titulo>
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
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <LinkButton onPress={() => navega.navigate('Cadastro')}>
          <LinkText>Crie sua conta !</LinkText>
        </LinkButton>
      </Container>
    </Background>
  );
}
