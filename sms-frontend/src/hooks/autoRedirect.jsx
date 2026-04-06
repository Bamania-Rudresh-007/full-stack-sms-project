import { Navigate, Outlet } from "react-router-dom";
// import Welcome from "../components/Welcome-Page/Welcome";

const ProtectedRoute = () => {

    const token = localStorage.getItem("token");

    if(token && token !== "null"){
        return <Navigate to="/home" replace />
    }

    return <Outlet />;
}

export default ProtectedRoute;