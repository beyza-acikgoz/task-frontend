import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./components/Header";
import Datatables from "./components/DataTables";
import { columns, data } from "./data/data";
import addRow from "./utils/addRow";


const App = () => {
  const [allData, setAllData] = React.useState(data); 

  useEffect(() => {
    if(data) {
      setAllData(data);
    }
  }, []);
  return (<div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
      <button
      className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      onClick={() => addRow(allData, setAllData)}
    >
      Ekle
    </button>
    <Datatables columns={columns} data={allData} />
    <div>Name: home</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>)
};
ReactDOM.render(<App />, document.getElementById("app"));
