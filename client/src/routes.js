import Base from "./components/Base.jsx";
import HomePage from "./components/HomePage.jsx";
//import DashboardPage from "./containers/DashboardPage.jsx";
import Dashboard from "./containers/Dashboard.jsx";
import LoginPage from "./containers/LoginPage.jsx";
import SignUpPage from "./containers/SignUpPage.jsx";
import Auth from "./modules/Auth";
import AboutPage from "./containers/AboutPage.jsx";
import ProfilePage from "./containers/ProfilePage.jsx";
import ProfileForm from "./components/ProfileForm.jsx";
import ProfileImages from "./components/ProfileImages.jsx";
import AddBarber from "./components/AddBarber.jsx";
import AppointmentPage from "./containers/AppointmentPage.jsx";
import AppointmentForm from "./components/AppointmentForm.jsx";
//import Profiles from "./containers/Profiles.jsx";
import ConfirmPage from "./containers/ConfirmPage.jsx";
import AddAppointment from "./components/AddAppointment.jsx";
import AdminUser from "./components/AdminUser.jsx";
import ContactPage from "./components/ContactPage.jsx";
import AdminProfile from "./components/AdminProfile.jsx";

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: "/",
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, Dashboard);
          //callback(null, Profiles);
        } else {
          callback(null, HomePage);
        }
      }
    },

    {
      path: "/login",
      component: LoginPage
    },

    {
      path: "/signup",
      component: SignUpPage
    },

    {
      path: "/addProfile",
      component: AddBarber
    },

    {
      path: "/profile",
      component: ProfilePage
    },

    {
      path: "/profile/edit/:profileId",
      component: ProfileForm
    },

    {
      path: "/profile/profileImages/:profileId",
      component: ProfileImages
    },

    {
      path: "/addAppointment",
      component: AddAppointment
    },

    {
      path: "/appointments/:profileEmail",
      component: AppointmentPage
    },

    {
      path: "/appointments/edit/appointmentId/:appointmentId",
      component: AppointmentForm
    },

    {
      path: "/admin",
      component: AdminUser
    },

    {
      path: "/adminprofile",
      component: AdminProfile
    },

    {
      path: "/confirm",
      component: ConfirmPage
    },

    {
      path: "/confirm/add/:email",
      component: ConfirmPage
    },

    {
      path: "/contact",
      component: ContactPage
    },

    {
      path: "/confirm/:appointmentId",
      component: ConfirmPage
    },

    {
      path: "/about",
      component: AboutPage
    },

    {
      path: "/logout",
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace("/");
      }
    }
  ]
};

export default routes;
