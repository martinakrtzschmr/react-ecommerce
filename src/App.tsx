import { Link } from '@tanstack/react-router';
import './App.css';

function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>React ecommerce</h1>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
}

export default App;
