import React, {Suspense} from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { columns, data } from "./data/data";
const Header = React.lazy(() => import('home/Header'));
const Datatables = React.lazy(() => import('home/Datatables'));

import addRow  from "home/addRow";

const App = () =>{ 
  const [allData, setAllData] = React.useState(data);
  React.useEffect(() => {
    if(data) {
      setAllData(data);
    }
  }, []);
  return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>Loading...</div>}>
    <Header title={"Sepet"}/>
          <button
      className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      onClick={() => addRow(allData, setAllData)}
    >
      Ekle
    </button>
    <Datatables columns={columns} data={allData} />
    </Suspense>
    <div>Name: cart</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
)
}
ReactDOM.render(<App />, document.getElementById("app"));
