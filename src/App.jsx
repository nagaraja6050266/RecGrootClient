import { Route, Routes } from "react-router-dom";
import IndexTemplate from "./components/indexTemplate";
import MainComponent from "./pages/after-login/MainComponent";
import { Dashboard } from "./pages/after-login/dashboard/index";
import Students from "./pages/after-login/students/index.jsx";
import Permissions from "./pages/after-login/permissions";
import Settings from "./pages/after-login/settings";
import IntroPage from "./pages/intro/index.jsx";
import OtpForm from "./pages/password/otpForm";
import PasswordForm from "./pages/password/passwordForm";
import SignInForm from "./pages/signin/SignInForm";
import SignUpForm from "./pages/signup/StudentSignUp.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route element={<IndexTemplate page={" "} />}>
                <Route path="/signin" element={<SignInForm />} />
                <Route
                    path="/set-password"
                    element={<PasswordForm page="set-password" />}
                />
                <Route path="/otp" element={<OtpForm otpLength={4} />} />
                <Route
                    path="/reset-password"
                    element={<PasswordForm page="reset-password" />}
                />
                <Route
                    path="/forgot-password"
                    element={<PasswordForm page="forgot-password" />}
                />
            </Route>
            <Route element={<MainComponent />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/permissions" element={<Permissions />} />
                <Route path="/settings" element={<Settings />} />
            </Route>
        </Routes>
    );
}

export default App;

// Just a chk
