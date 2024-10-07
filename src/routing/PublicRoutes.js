import UsersList from "../pages/UsersList";
import FormPage from "../pages/FormPage";

const PublicRoutes = [
    {
        component: UsersList,
        path: "/",
    },
    {
        component: FormPage,
        path: "/create",
    },
    {
        component: FormPage,
        path: "/edit/:id",
    },
];

export default PublicRoutes;
