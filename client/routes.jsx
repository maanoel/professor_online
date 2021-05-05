import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "../imports/ui/pages/Landing/Landing";
import TeacherList from "../imports/ui/pages/TeacherList";
import TeacherForm from "../imports/ui/pages/TeacherForm";
import { LoginForm } from "../imports/ui/pages/Login/LoginForm";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={LoginForm} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
};
export default Routes;
