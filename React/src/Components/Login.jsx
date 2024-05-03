import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center mt-3">
                                    Login
                                </h3>
                            </div>
                            <form className="card-body">

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

                                <div className="mb-3 d-grid">
                                    <Button variant="secondary" size="md">Login</Button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
