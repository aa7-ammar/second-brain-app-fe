import { Button } from "../Components/ui/Button"
import { Input } from "../Components/ui/Input"
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const  Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const  signup = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/signup` , {
            username,
            password
            
        });

        alert("You are signed up");
        navigate("/signin");
    }


    return (
        <div className="h-screen w-full flex justify-center bg-gray-200 items-center">
            <div className="bg-white rounded-lg border min-w-48 p-8">
                <Input placeholder="Username" reference={usernameRef}/>
                <Input placeholder="Password" reference={passwordRef}/>
                <div className="flex justify-center pt-4">
                    <Button variant="primary" size="md" text="Sign Up" fullWidth={true} loading={false} onClick={signup}/>
                </div>

            </div>
        </div>
    )
}