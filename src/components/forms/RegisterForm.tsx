import { Link } from "react-router-dom";
import { InputContainer, InputLabel, InputField, Button } from "../../utils/styles"
import styles from "./index.module.scss";
export const RegisterForm = () => {
  
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <h2 className={styles.applicationName}>Ming - Register!</h2>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField type="email" id="email" />
            </InputContainer>
            <section className={styles.nameFieldRow}>
            <InputContainer>
                <InputLabel htmlFor="firstName">First Name</InputLabel>
                <InputField type="text" id="firstName" />
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor="lastName">Last Name</InputLabel>
                <InputField type="text" id="lastName" />
            </InputContainer>
            </section>
            <InputContainer>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField type="password" id="password" />
            </InputContainer>
            <Button className={styles.button}>Create My Account</Button>
            <div className={styles.spanIfExistingOrNot}>
                <span>Already have an account?</span>
                <Link to="/login">
                    <span className={styles.fortextDecoration}>
                        Login
                    </span>
                </Link>
            </div>
        </form>
    )
} 