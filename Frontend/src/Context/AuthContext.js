import { createContext, useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import ToastContext from "./ToastContext";
const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {

    const { toast } = useContext(ToastContext)

    const navigate = useNavigate()
    const location = useLocation()


    const [user, setUser] = useState(null)


    useEffect(() => {
        isLoggedIn()
    }, [])


    const isLoggedIn = async () => {
        try {

            const headers = { "Authorization": `Bearer ${sessionStorage.getItem("token")}` }

            // const result = await axios.post("https://jsonplaolder.typicode.com/posts", null, { headers })

            setUser("SJSL")

            if (location.pathname === "/" || location.pathname === "/signup") {
                navigate("/home");
            } else {
                navigate(location.pathname)
            }


        } catch (error) {
            navigate("/")
            console.log(error);
            toast.error("Please Login First")
        }
    }


    const Login = async (UserDetails) => {

        try {
            console.log(UserDetails);
            // const res = await axios.post("http://localhost/3010/user/login", UserDetails)
            // setUser(res.data)
            navigate("/home")

        } catch (error) {
            console.log(error);
            navigate("/")
        }
    }

    const SignUp = async (UserDetails) => {

        try {
            console.log(UserDetails);
            // const res = await axios.post("http://localhost/3010/user/signup", UserDetails)
            // setUser(res.data)
            toast.success("User Registered Successfully")
            navigate("/")

        } catch (error) {
            console.log(error);
            navigate("/")
        }
    }



    return (
        <AuthContext.Provider value={{ user, setUser, Login, SignUp }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;