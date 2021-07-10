import logo from './logo.svg';
import styles from './App.module.css';
import classNames from 'classnames';
import Todos from "./components/Todos/Todos";


function App() {
  return (
    <div className={classNames(styles.app)}>

      <Todos />
    </div>
  );
}

export default App;
