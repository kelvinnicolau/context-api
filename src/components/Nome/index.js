
function Nome({nome, mudaNome}) {
    return (
      <div>
        <span style={{ color: '#FF0000'}}> bEM VINDO {nome}</span>
        <button onClick={ () => mudaNome('Testeeee') }>Trocar Nome</button>
      </div>
    );
  }
  
  export default Nome;
  