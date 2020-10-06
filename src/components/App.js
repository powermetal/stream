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
                <Route path='/streams/edit' exact component={StreamEdit} />
            </Router>
        </div>
    );
};

export default App;