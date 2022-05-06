import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";
import generateToken from "./useJwt";
import useUser from "./useUser"

const useSocial = () => {
    const { user, loading, error, setError, setUser, setLoading } = useUser();
    // navigate to
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                generateToken(result.user.email);
                toast.info("You are logged in!");
                setLoading(false);
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error))

    };

    const handleFacebookLogin = () => {
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user);
                generateToken(result.user.email);
                toast.info("You are logged in!");
                setLoading(false);
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error))
    }

    return { handleGoogleSignIn, handleFacebookLogin };
};

export default useSocial;