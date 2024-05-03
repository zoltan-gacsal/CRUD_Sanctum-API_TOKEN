import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';


const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();


    const handleChange = async (e) => {
        e.preventDefault()
        setErrors(null)
        setLoading(true)
        const data = { name, email, password}

        try {

            const response = await axios.post('', data)
            setLoading(false)
            setName("")
            setEmail("")
            setPassword("")
            toast.success(response.data.message)
            navigate('/login')

        } catch (error) {
            setLoading(false)
            if(error?.response?.status === 422){
                setErrors(error.response.data.errors)
            }
            console.log(error);
        }

    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center mt-3">
                                    Registration
                                </h3>
                            </div>
                            <form className="card-body" onSubmit={handleChange}>
                                <div className="mb-3">
                                    <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
                                        <Form.Control type="name" placeholder="name" name="name"/>
                                    </FloatingLabel>
                                </div>
                                <div className="mb-3">
                                    <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                                        <Form.Control type="email" placeholder="email" name="email"/>
                                    </FloatingLabel>
                                </div>
                                <div className="mb-3">
                                    <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                        <Form.Control type="password" placeholder="password" name="password"/>
                                    </FloatingLabel>
                                </div>
                                <div className="mb-3">
                                    <FloatingLabel controlId="floatingPasswordConfirmation" label="Password Confirmation" className="mb-3">
                                        <Form.Control type="password" placeholder="Password_Confirmation" name="password_confirmation"/>
                                    </FloatingLabel>
                                </div>

                                <div className="mb-3 d-grid">
                                    <Button variant="secondary" size="lg">Registration</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
