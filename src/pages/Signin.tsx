import axios from "axios";
import { Button } from "../Components/ui/Button"
import { Input } from "../Components/ui/Input"
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const  Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const  signin = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BACKEND_URL}/api/v1/signin` , {
            username,
            password
            
        });

        const jwt = response.data.token;
        localStorage.setItem("token" , jwt);
        navigate("/dashboard");
    }

    return (
        <div className="h-screen w-full flex justify-center bg-gray-200 items-center">
            <div className="bg-white rounded-lg border min-w-48 p-8">
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <div className="flex justify-center pt-4">
                    <Button variant="primary" size="md" text="Sign In" fullWidth={true} loading={false} onClick={signin}/>
                </div>

            </div>
        </div>
    )
}