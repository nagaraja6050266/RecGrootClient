import { Route, Routes } from "react-router-dom";
import IndexTemplate from "./components/indexTemplate";
import MainComponent from "./components/common-components/MainComponent.jsx";
import OtpForm from "./pages/password/otpForm";
import PasswordForm from "./pages/password/passwordForm";
import SignInForm from "./pages/signin/SignInForm";
import { CollegeSignUp } from "./pages/signup/CollegeSignUp.jsx";
import { DepartmentAddComponent } from "./pages/signup/DepartmentsAddComponent.jsx";
import StudentSignUpForm from "./pages/signup/StudentSignUp.jsx";
import StudentsList from "./pages/students/StudentsList.jsx";
import MiniListComponent from "./components/common-components/MiniListComponent.jsx";
import DetailsViewComponent from "./components/common-components/DetailsViewComponent.jsx";
import { StudentDetails } from "./pages/students/StudentDetails.jsx";
import { StatusComponent } from "./components/common-components/StatusComponent.jsx";
import ApprovalsList from "./pages/approvals/ApprovalsList.jsx";
import ApprovalDetails from "./pages/approvals/ApprovalDetails.jsx";
import CompaniesList from "./pages/companies/CompaniesList.jsx";
import CompanyDetails from "./pages/companies/CompanyDetails.jsx";
import DrivesList from "./pages/drives/DrivesList.jsx";
import DriveDetails from "./pages/drives/DriveDetails.jsx";

function App() {
    return (
        <Routes>
            <Route path="/test" element={<StatusComponent />} />
            <Route path="/student/signup" element={<StudentSignUpForm />} />
            <Route path="/institute/signup" element={<CollegeSignUp />} />
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
                <Route path="/" element={"Welcome"} />
                <Route path="/rep/students" element={<StudentsList />} />
                <Route
                    path="/rep/students/:studentId"
                    element={<StudentDetails />}
                />
                <Route path="/rep/approvals" element={<ApprovalsList />} />
                <Route
                    path="/rep/approvals/:approvalId"
                    element={<ApprovalDetails />}
                />
                <Route path="/rep/companies" element={<CompaniesList />} />
                <Route
                    path="/rep/companies/:companyId"
                    element={<CompanyDetails />}
                />
                <Route path="/rep/drives" element={<DrivesList />} />
                <Route path="/rep/drives/:driveId" element={<DriveDetails />} />
            </Route>
        </Routes>
    );
}

export default App;
