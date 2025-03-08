import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login()); // Set auth state to logged in
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconWrapper}>
          <FaSignInAlt style={styles.icon} />
        </div>
        <h2 style={styles.title}>Welcome Back!</h2>
        <p style={styles.subtitle}>Sign in to manage your tasks efficiently</p>
        <button style={styles.button} onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
  },
  card: {
    width: "350px",
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  iconWrapper: {
    backgroundColor: "#28a745",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 20px",
  },
  icon: {
    color: "#fff",
    fontSize: "30px",
  },
  title: {
    marginBottom: "10px",
    fontSize: "28px",
    color: "#333",
    fontWeight: "600",
  },
  subtitle: {
    marginBottom: "30px",
    fontSize: "16px",
    color: "#555",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  },
  buttonHover: {
    backgroundColor: "#218838",
    transform: "scale(1.05)",
  },
};

export default Login;
