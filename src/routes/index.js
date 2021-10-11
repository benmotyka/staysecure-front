import { Redirect, Route, Switch } from "react-router-dom";

// import HomePage from "pages/HomePage";
import HomePage from "pages/home.js"
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
        <Route path="/" component={HomePage} exact/>
      {/* <Route path="/" component={HomePage} exact />
      <Route path="/courses" component={CoursesPage} exact />
      <Route path="/login" component={LoginPage} exact />
      <Route path="/wiki" component={WikiPage} exact />
      <Route path="/wiki/keylogger" component={KeyloggerPage} exact />
      <Route path="/my-account" component={MyAccountPage} exact />
      <Route path="/reset-password" component={ResetPasswordPage} exact />
      <Route path="/forgot-password" component={ForgotPasswordPage} exact />
      <Route
        path="/registration/confirm/:token"
        component={RegistrationConfirmPage}
      />
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
