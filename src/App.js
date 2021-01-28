import { Provider } from 'react-redux'
import store from './redux/Store'
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";


function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <PostForm />
        <hr/>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
