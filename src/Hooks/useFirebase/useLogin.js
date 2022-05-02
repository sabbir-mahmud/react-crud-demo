import { signInWithEmailAndPassword } from "firebase/auth";
import useUser from "./useUser";
import auth from "../../Firebase/firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useLogin = () => {
    const { setUser, setLoading, setError, handleLogout } = useUser();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                if (user.emailVerified) {
                    setUser(user);
                    toast.info("You are logged in!");
                    setLoading(false);
                    navigate(from);
                } else {
                    toast.error("Please verify your email address");
                    handleLogout();
                }
            })
            .catch((error) => {
                toast.error(error.message);
                setLoading(false);
            });

    }

    return handleLogin;
}

export default useLogin;