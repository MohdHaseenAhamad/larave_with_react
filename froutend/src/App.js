import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Link, Route} from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import Edit from './pages/edit';
import View from './pages/view';
function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
        <Link className="navbar-brand" to={"/"}>CRUD Laravel With React</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = {"/create"}>Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = {"/edit"}>Edit</Link>
            </li>
          
          </ul>
        </div>
      </nav>
      <div className="container">
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/view/:id' element={<View/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
