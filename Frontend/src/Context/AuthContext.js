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

            const result = await axios.post("http://localhost:3010/auth/isLoggedIn", null, { headers })

            console.log(result);

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



    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
