import './App.css';
import Card from './components/Card/Card';

function App() {
    return (
        <div className='App'>
            <Card type='red' show={true} word='sampleWord' />
        </div>
    );
}

export default App;
