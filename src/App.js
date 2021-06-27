import { Provider } from "react-redux";
import "./App.css";
import { Artist } from "./components";
import store from "./redux/store";

function App() {
   return (
      <Provider store={store}>
         <div className="container">
            <div>
               <Artist />
            </div>
         </div>
      </Provider>
   );
}

export default App;
