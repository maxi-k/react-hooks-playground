import React, { useState} from 'react';
import './App.css';

const App = () => {
    const [name, setName] = useState('Nikki Lauda')
    return (
        <div className="App">
          <header className="App-header">
            Wie heißt die Mutter von
            <input value={name} onChange={(event) => setName(event.target.value)} />
            ?
            <p className="mama">
              {/* Beautiful! */}
              {name &&
               name.split(' ').length > 1 &&
               (name.split(' ').length > 2 || name[name.length - 1] !== ' ') &&
               "Mama L" + name.split(' ')[1].substring(1) + "!"}
            </p>
          </header>
        </div>
    );
}

export default App;
