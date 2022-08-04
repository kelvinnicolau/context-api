import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Nome() {

    const { alunos, setAlunos } = useContext(UserContext);

    return (
      <div>
        <span style={{ color: '#FF0000'}}> bEM VINDO { alunos }</span>
        <button onClick={ () => setAlunos('Kelvin') }>Trocar Nome</button>
      </div>
    );
  }
  
  export default Nome;
  