import { InputContainer, InputLabel, InputField, Button } from "../../utils/styles"
import styles from "./index.module.scss";
export const LoginForm = () => {
  
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <h2 style={{color:"#6c29b4"}}>Ming - Login!</h2>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField type="email" id="email" />
            </InputContainer>

            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField type="password" id="password" />
            </InputContainer>
            <Button className={styles.button}>Login</Button>
        </form>
    )
} 