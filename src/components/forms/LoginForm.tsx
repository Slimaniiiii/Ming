import { Link } from "react-router-dom";
import { InputContainer, InputLabel, InputField, Button } from "../../utils/styles"
import styles from "./index.module.scss";
export const LoginForm = () => {

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <h2 className={styles.applicationName}>Ming - Login!</h2>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField type="email" id="email" />
            </InputContainer>

            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField type="password" id="password" />
            </InputContainer>
            <Button className={styles.button}>Login</Button>
            <div className={styles.spanIfExistingOrNot}>
                <span>Don't have an account?</span>
                <Link to="/register">
                    <span className={styles.fortextDecoration}>
                        Register
                    </span>
                </Link>
            </div>
        </form>
    )
} 