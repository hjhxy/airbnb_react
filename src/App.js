import {memo} from "react";
import './App.css';
import {Route,Routes,useRoutes} from 'react-router-dom';
import Footer from "@/components/Footer/Footer.jsx";
import Header from "@/components/Header/Header.jsx";
import routes from "@/router";

function App() {
  return (
    <div className="App">
        <div className="app-header">
            <Header></Header>
        </div>
        <div className="app-bodys">
                {/*<Routes>*/}
                        {/*{*/}
                        {/*    routes.map((el,index)=>{*/}
                        {/*        return <Route path={el.path} element={el.element} key={index}></Route>*/}
                        {/*    })*/}
                        {/*}*/}
                    {useRoutes(routes)}
                {/*</Routes>*/}
        </div>
        <div className="app-footer">
            <Footer></Footer>
        </div>
    </div>
  );
}

export default memo(App);
