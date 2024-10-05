import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/authentication/LoginPage";
import { RegisterPage } from "../pages/authentication/RegisterPage";
import { ForgotPasswordPage } from "../pages/authentication/ForgotPasswordPage";
import { AccountPage } from "../pages/account/AccountPage";
import { ErrorPage } from "../pages/misc/ErrorPage";

import { BoxiconsPage } from "../pages/icons/BoxiconPage";

import { BasicInputPage } from "../pages/form-element/BasicInputPage";
import { InputGroupPage } from "../pages/form-element/InputGroupPage";
import { HorizontalFormPage } from "../pages/form-layout/HorizontalFormPage";

import { TablesPage } from "../pages/TablesPage";
import { DashboardPage } from "../pages/DashboardPage";

import  ProjectsView  from "../pages/projects/view";
import  ProjectsNew  from "../pages/projects/New";
import  ProjectsCreate  from "../pages/projects/Create";
import  ProjectsEdit  from "../pages/projects/Edit";

import Users  from "../pages/users/View";

import CaseNew from "../pages/case/New"
import CaseCreate from "../pages/case/Create"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />

            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />

            <Route path="/account/settings" element={<AccountPage />} />

            <Route path="/misc/error" element={<ErrorPage />} />
            <Route path="/boxicons" element={<BoxiconsPage />} />

            <Route path="/form/basic-inputs" element={<BasicInputPage />} />
            <Route path="/form/input-groups" element={<InputGroupPage />} />
            <Route path="/form-layout/horizontal-form" element={<HorizontalFormPage />} />

            <Route path="/tables" element={<TablesPage />} />

            <Route path="/projects/view" element={<ProjectsView />} />
            <Route path="/projects/new" element={<ProjectsNew />} />
            <Route path="/projects/create" element={<ProjectsCreate />} />
            <Route path="/projects/edit" element={<ProjectsEdit />} />

            <Route path="/users/view" element={<Users />} />

            <Route path="/case/new" element={<CaseNew />} />
            <Route path="/case/create" element={<CaseCreate />} />
        </Routes>
    );
};

export default AppRoutes;
