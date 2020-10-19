import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <>
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBaber" />

        <form>
          <h1>Faça seu Cadastro</h1>
          <Input name="nome" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="senha"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  </>
);

export default SignUp;
