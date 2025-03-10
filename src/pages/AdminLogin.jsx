import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './AdminLogin.module.css';

const AdminLogin = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (password === "BMEMS#1:)") {
            localStorage.setItem("adminAuthenticated", "true");
            navigate("/admin-panel");
        } else {
            alert("Incorrect password");
        }
    };

    return (
        <div className={styles.bemenet}>
            <h2>Admin Login</h2>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default AdminLogin;
