import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import StreamList from './StreamList';
import Header from './Header';
import StreamEdit from "./StreamEdit";
import StreamCreate from "./StreamCreate";

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/streams' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit' exact component={StreamEdit} />
            </BrowserRouter>
        </div>
    );
};

export default App;