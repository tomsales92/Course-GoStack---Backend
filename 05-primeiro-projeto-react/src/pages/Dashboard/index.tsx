import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Git Explorer" />
      <Title>Explorer repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/46347115?s=460&u=425542a9e6f9bee54b666f2e04a941758abbe045&v=4"
            alt="Everton Sales"
          />
          <div>
            <strong>everton/pig</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/46347115?s=460&u=425542a9e6f9bee54b666f2e04a941758abbe045&v=4"
            alt="Everton Sales"
          />
          <div>
            <strong>everton/pig</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/46347115?s=460&u=425542a9e6f9bee54b666f2e04a941758abbe045&v=4"
            alt="Everton Sales"
          />
          <div>
            <strong>everton/pig</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
