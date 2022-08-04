import { useState } from 'react';
import Alunos from './components/Alunos';

import UserProvider from './contexts/user';

function App() {

  return (
    <UserProvider>
      <div>
      <h1>Context API</h1>
        <strong>Bem vindo!</strong>
      <hr/>
      <Alunos/>
    </div>
    </UserProvider>
  );
}

export default App;

