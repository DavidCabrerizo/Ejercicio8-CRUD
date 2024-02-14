import logo from './logo.svg';
import './App.css';

//importamos lso componentes

import CompShowBlogs from './blog/ShowBlogs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <CompShowBlogs></CompShowBlogs>
    </div>
  );
}

export default App;
