import './App.css';
import Form from '../Form';
import List from '../ListTodo';
import store from '../../redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div className="wrapperApp">
        <div className="wrapperTodo">
          <Form />
          <List />
        </div>
      </div>
    </Provider>
  );
}

export default App;
