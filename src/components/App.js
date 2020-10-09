import React from 'react';
import { Router, Route} from 'react-router-dom';
import history from "../history";

import StreamList from './StreamList';
import Header from './Header';
import StreamEdit from "./StreamEdit";
import StreamCreate from "./StreamCreate";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/streams' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit/:id' exact component={StreamEdit} />
            </Router>
        </div>
    );
};

export default App;

//311738580140-qp0mvfgb73ctb1a3sra03k1k3ir752t0.apps.googleusercontent.com