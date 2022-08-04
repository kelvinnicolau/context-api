import Nome from '../Nome';

function Alunos({nome, mudaNome}) {
    return (
      <div>
        <h1>Alunos</h1>
        <Nome nome={nome} mudaNome={mudaNome} />
      </div>
    );
  }
  
  export default Alunos;
  