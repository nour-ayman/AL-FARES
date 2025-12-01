    import { useRef, useState, useEffect } from 'react';
    import './LoginForm.css'; // import the CSS file

    const LoginForm = () => {
        const userRef = useRef();
        const errRef = useRef();

        const [user, setUser] = useState('');
        const [pwd, setPwd] = useState('');
        const [errMsg, setErrMsg] = useState('');
        const [success, setSuccess] = useState(false);

        useEffect(() => {
            userRef.current.focus();
        }, []);

        useEffect(() => {
            setErrMsg('');
        }, [user, pwd]);

        const handleSubmit = (e) => {
            e.preventDefault();

            if (user === '' || pwd === '') {
                setErrMsg("Missing Username or Password");
                return;
            }

            console.log("Submitted:", user, pwd);
            setUser('');
            setPwd('');
            setSuccess(true);
        }

        return (
            <div className="login-wrapper">
                {success ? (
                    <section>
                        <h1>You are logged in!</h1>
                        <br />
                        <p>
                            <a href="#">Go to Home</a>
                        </p>
                    </section>
                ) : (
                    <section>
                        <h1 style={{ textAlign: 'center', marginBottom: '1rem'}}>AL FARES</h1>
                       
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username" className="sr-only">Username:</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />

                            <label htmlFor="password" className="sr-only">Password:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                placeholder="Password"
                            />
                            <button>Login</button>
                        </form>
                        <p style={{textAlign: 'center', fontSize: '0.9rem', marginTop: '1rem'}}>
                            New Here? 
                            <span className="line">
                                <a href="LearnMore" style={{marginLeft: '5px', fontWeight: 'bold'}}>Learn More</a>
                            </span>
                        </p>
                    </section>
                )}
            </div>
        )
    }

    export default LoginForm;
