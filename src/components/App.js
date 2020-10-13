import React from 'react';
import { Router, Route} from 'react-router-dom';
import history from "../history";

import StreamList from './streams/StreamList';
import Header from './Header';
import StreamEdit from "./streams/StreamEdit";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/streams' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit/:id' exact component={StreamEdit} />
                <Route path='/streams/delete/:id' exact component={StreamDelete} />
            </Router>
        </div>
    );
};

export default App;

//311738580140-qp0mvfgb73ctb1a3sra03k1k3ir752t0.apps.googleusercontent.com