import { useNavigate } from "react-router-dom";

export function isAuth() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");
  if (token && role) {
    navigate("/profile");
    return true;
  } else return false;
}
