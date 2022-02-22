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
import quizSummary from "pages/quizSummary"
import forgotPassword from "pages/forgotPassword";
import forgotPasswordChange from "pages/forgotPasswordChange";

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
      <Route path="/article/:articleName" component={article} exact/>

      <Route path="/account/settings" component={accountSettings} exact/>
      <Route path="/account/courses" component={accountCourses} exact/>

      <Route path="/course/:courseName" component={course} exact/>
      <Route path="/quiz/:courseName" component={quiz} exact/> 
      <Route path="/quiz-summary/:courseName" component={quizSummary} exact/> 
      <Route path="/forgot-password" component={forgotPassword} exact />
      <Route path="/forgot-password/:token" component={forgotPasswordChange} exact/>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
