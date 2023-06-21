import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

export function isAuth() {
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");
  if (token && role) {
    navigate("/profile");
    return true;
  } else return false;
}
