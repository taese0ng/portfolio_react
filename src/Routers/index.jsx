import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {Home} from 'Containers';

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={()=><Home/>}/>
                <Redirect path="*" to="/"/>
            </Switch>
        </BrowserRouter>
    )
}


export default Root;
