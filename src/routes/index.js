import { Redirect, Route, Switch } from "react-router-dom";

import Home from "pages/home";
import Login from "pages/login";
import Register from "pages/register/index";
import RegisterConfirm from "pages/register/confirm";
import Articles from "pages/articles";
import Article from "pages/article";
import Courses from "pages/courses";
import Course from "pages/course";
import CoursePreview from "pages/coursePreview";
import AccountSettings from "pages/account/settings";
import AccountCourses from "pages/account/courses";
import AccountQuizes from "pages/account/quizes";
import Quiz from "pages/quiz";
import QuizSummary from "pages/quizSummary";
import ForgotPassword from "pages/forgotPassword";
import ForgotPasswordChange from "pages/forgotPasswordChange";
import Faq from "pages/faq";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/articles",
    component: Articles,
  },
  {
    path: "/faq",
    component: Faq,
  },
  {
    path: "/courses",
    component: Courses,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/register/confirm/:token",
    component: RegisterConfirm,
  },
  {
    path: "/article/:articleName",
    component: Article,
  },
  {
    path: "/account/settings",
    component: AccountSettings,
  },
  {
    path: "/account/courses",
    component: AccountCourses,
  },
  {
    path: "/account/quizes",
    component: AccountQuizes,
  },
  {
    path: "/course/:courseName",
    component: Course,
  },
  {
    path: "/course-preview/:courseName",
    component: CoursePreview,
  },
  {
    path: "/quiz/:courseName",
    component: Quiz,
  },
  {
    path: "/quiz-summary/:courseName",
    component: QuizSummary,
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/forgot-password/:token",
    component: ForgotPasswordChange,
  },
];

const Routes = () => {
  return (
    <Switch>
      {routes.map((item) => (
        <Route path={item.path} component={item.component} exact />
      ))}
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
