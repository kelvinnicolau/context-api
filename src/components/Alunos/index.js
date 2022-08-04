import { useContext } from 'react';

import Nome from '../Nome';

import { UserContext } from '../../contexts/user'

function Alunos() {

  const { qtdAlunos} = useContext(UserContext);

    return (
      <div>
        <h1>Quantidade: { qtdAlunos}</h1>
        <Nome />
      </div>
    );
  }
  
  export default Alunos;
  