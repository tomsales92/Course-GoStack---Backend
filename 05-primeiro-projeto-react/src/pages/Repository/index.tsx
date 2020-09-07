import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/46347115?s=460&u=425542a9e6f9bee54b666f2e04a941758abbe045&v=4"
            alt="avatar"
          />
          <div>
            <strong>tomsales/jokenpo</strong>
            <p>Descrição de repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Starts</span>
          </li>

          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>67</strong>
            <span>Issues Abertos</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="#">
          <div>
            <strong>efefsfsfsf</strong>
            <p>hfwf</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
