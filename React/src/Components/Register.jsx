import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Register = () => {
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
                            <div className="card-body">
                                <div className="mb-3">
                                    <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                                        <Form.Control type="name" placeholder="name" name="name"/>
                                    </FloatingLabel>
                                </div>
                                <div className="mb-3">
                                    <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                                        <Form.Control type="email" placeholder="email" name="email"/>
                                    </FloatingLabel>
                                </div>
                                <div className="mb-3">
                                    <FloatingLabel controlId="floatingInput" label="Password" className="mb-3">
                                        <Form.Control type="password" placeholder="password" name="password"/>
                                    </FloatingLabel>
                                </div>
                                <div className="mb-3">
                                    <FloatingLabel controlId="floatingInput" label="Password Confirmation" className="mb-3">
                                        <Form.Control type="password" placeholder="Password_Confirmation" name="password_confirmation"/>
                                    </FloatingLabel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
