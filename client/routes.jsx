import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { LoginForm } from "../imports/ui/pages/Login/LoginForm";
import Landing from "../imports/ui/pages/Landing/Landing";
import TeacherList from "../imports/ui/pages/TeacherList";
import TeacherForm from "../imports/ui/pages/TeacherForm";
import NewUserForm from "../imports/ui/pages/NewUserForm";
import MessagesList from "../imports/ui/pages/MessagesList";
import ProfileForm from "../imports/ui/pages/Profile";
import ClassList from "../imports/ui/pages/ClassList";
<<<<<<< HEAD
import About from "../imports/ui/pages/About";
=======
import AnnotationsStudent from "../imports/ui/pages/AnnotationsStudent";
>>>>>>> 4cc55a4c0d90d36cb81d611ac9169cbe946c2c1a

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/about" exact component={About} />
      <Route path="/login" exact component={LoginForm} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/new-user" component={NewUserForm} />
      <Route path="/messages" component={MessagesList} />
      <Route path="/profile" component={ProfileForm} />
      <Route path="/classes" component={ClassList} />
      <Route path="/annotations-student" component={AnnotationsStudent} />
    </BrowserRouter>
  );
};
export default Routes;
