import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputContainer, InputLabel, InputField, Button } from "../../utils/styles"
import styles from "./index.module.scss";
export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors)
    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.applicationName}>Ming - Login!</h2>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField type="email" id="email" {...register('email', {
                    required: true
                })} />
            </InputContainer>

            <InputContainer className={styles.loginFormPassword}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField type="password" id="password" {...register('password', {
                    required: true
                })} />
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