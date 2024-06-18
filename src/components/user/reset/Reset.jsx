import { useState } from "react";
import { sendPasswordReset } from "../../../services/AuthServices";

const Reset = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordReset(email);
            setMessage('Password reset email sent successfully.');
        } catch (error) {
            setMessage('Error sending password reset email.');
        }
    }

    return (
        <div className="container">
            <h2 className="mt-3 text-center">Atstatykite slaptazodi</h2>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="El. pastas"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Siusti</button>
                </div>
            </form>
        </div>
    );
}

export default Reset;
