import styled from 'styled-components/native';

export const Background = styled.View`
  background-color: #131313;
  flex: 1;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Titulo = styled.Text`
  font-size: 30px;
  color: #fff;
  padding: 10px;
  padding-bottom: 25px;
`;

export const Logo = styled.Image`
  margin-bottom: 15px;
`;
export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(225,225,225,0.20)',
})`
  width: 88%;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 15px;
  font-size: 18px;
  padding-left: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  width: 88%;
  height: 45px;
  border-radius: 15px;
  margin-top: 8px;
`;
export const SubmitText = styled.Text`
  font-size: 18px;
  color: #000;
`;
export const LinkButton = styled.TouchableOpacity`
  margin-top: 20px;
`;
export const LinkText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
