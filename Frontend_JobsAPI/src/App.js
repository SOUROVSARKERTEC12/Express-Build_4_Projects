import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home, Dashboard, Register, Edit, Error, PrivateRoute} from './pages';


function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/edit/:id' element={<Edit/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </Router>
    );
}

export default App;
