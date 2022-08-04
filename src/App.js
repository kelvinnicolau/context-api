import { useState } from 'react';
import Alunos from './components/Alunos';

function App() {
  const [ nomeAluno, setNomeAluno ] = useState('Kelvin');

  return (
    <div>
      <h1>Context API</h1>
      <hr/>
      <Alunos nome={nomeAluno} mudaNome={setNomeAluno} />
    </div>
  );
}

export default App;
