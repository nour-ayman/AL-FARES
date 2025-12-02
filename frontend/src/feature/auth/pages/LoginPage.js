import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            minHeight: "100vh",
            backgroundColor: "#f5f5f5"
        }}>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
