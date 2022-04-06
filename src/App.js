import './App.css';
import Allitems from './components/allItems';
import Selecteditems from './components/selectedItems';
import { myContext } from './components/myContext';
function App() {
  return (
    <div className="App">
     <Allitems/>
     {/* <myContext.Provider>
        <Selecteditems/>
     </myContext.Provider> */}
     
    </div>
  );
}

export default App;
