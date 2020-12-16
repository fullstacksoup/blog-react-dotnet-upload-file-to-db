import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FileUploadForm from './../FileUploadForm/FileUploadForm';
import FileUploadList from './../FileUploadForm/FileUploadList';
import FileUploadLayout from './../FileUploadForm/FileUploadLayout';

export default function MainRouter(props) {

  return (
      <div>      
        <div className="container">
          <Switch>
            <Route exact path="/" exact component={FileUploadLayout} />
            <Route exact path="/upload" component={FileUploadForm} />
            <Route exact path="/list" component={FileUploadList} />
          </Switch>        
        </div>       
      </div>
  );
}
