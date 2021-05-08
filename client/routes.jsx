import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { LoginForm } from "../imports/ui/pages/Login/LoginForm";
import Landing from "../imports/ui/pages/Landing/Landing";
import TeacherList from "../imports/ui/pages/TeacherList";
import TeacherForm from "../imports/ui/pages/TeacherForm";
import NewUserForm from "../imports/ui/pages/NewUserForm";
import MessagesList from "../imports/ui/pages/MessagesList";
import ProfileForm from "../imports/ui/pages/Profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={LoginForm} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/new-user" component={NewUserForm} />
      <Route path="/messages" component={MessagesList} />
      <Route path="/profile" component={ProfileForm} />
    </BrowserRouter>
  );
};
export default Routes;
