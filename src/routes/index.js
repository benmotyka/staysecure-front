import { Redirect, Route, Switch } from "react-router-dom";

// import HomePage from "pages/HomePage";
import home from "pages/home";
import articles from "pages/articles/index";
import courses from "pages/courses";
import login from "pages/login";
import register from "pages/register/index";
import article from "pages/articles/article";
import accountSettings from "pages/account/settings";
import accountCourses from "pages/account/courses";
import registerConfirm from "pages/register/confirm";
// import CoursesPage from "pages/CoursesPage";
// import LoginPage from "pages/LoginPage";
// import WikiPage from "pages/WikiPage";
// import MyAccountPage from "pages/MyAccountPage";
// import ResetPasswordPage from "pages/ResetPasswordPage";
// import ForgotPasswordPage from "pages/ForgotPasswordPage";
// import RegistrationConfirmPage from "pages/RegistrationConfirmPage";
// import ForgotPasswordChangePage from "pages/ForgotPasswordChangePage";
// // COURSES
// import SqlInjectionCourse from "pages/courses/SqlInjectionCourse";
// // ARTICLES
// import KeyloggerPage from "pages/articles/KeyloggerPage";
// import QuizPage from "pages/QuizPage";

const Routes = () => {
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
      <Route path="/articles/:articleName" component={article} />
      <Route path="/account/settings" component={accountSettings} />
      <Route path="/account/courses" component={accountCourses} />

      {/* 
      <Route path="/forgot-password" component={ForgotPasswordPage} exact />

      <Route
      path="/forgot-password/:token"
      component={ForgotPasswordChangePage}
      />
      <Route path="/course/sql-injection" component={SqlInjectionCourse} />
    <Route path="/quiz/:courseName" component={QuizPage} /> */}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
