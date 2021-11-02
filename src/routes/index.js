import { Redirect, Route, Switch } from "react-router-dom";

import home from "pages/home";

import login from "pages/login";
import register from "pages/register/index";
import registerConfirm from "pages/register/confirm";

import articles from "pages/articles";
import article from "pages/article";

import courses from "pages/courses";
import course from "pages/course"

import accountSettings from "pages/account/settings";
import accountCourses from "pages/account/courses";
import quiz from "pages/quiz";
// import ForgotPasswordPage from "pages/ForgotPasswordPage";
// import ForgotPasswordChangePage from "pages/ForgotPasswordChangePage";
// // COURSES
// import SqlInjectionCourse from "pages/courses/SqlInjectionCourse";
// // ARTICLES
// import KeyloggerPage from "pages/articles/KeyloggerPage";
// import QuizPage from "pages/QuizPage";

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/" component={home} exact />
      <Route path="/articles" component={articles} exact />
      <Route path="/courses" component={courses} exact />
      <Route path="/login" component={login} exact />
      <Route path="/register" component={register} exact />
      <Route
        path="/register/confirm/:token"
        component={registerConfirm}
        exact
      />
      <Route path="/article/:articleName" component={article} />

      <Route path="/account/settings" component={accountSettings} />
      <Route path="/account/courses" component={accountCourses} />

      <Route path="/course/:courseName" component={course} />
      <Route path="/quiz/:courseName" component={quiz} /> 

      {/* 
      <Route path="/forgot-password" component={ForgotPasswordPage} exact />

      <Route
      path="/forgot-password/:token"
      component={ForgotPasswordChangePage}
      />
      */}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
