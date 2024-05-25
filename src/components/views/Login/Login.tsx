import React, { ChangeEvent, useState, FormEvent } from 'react';
import { UserEntityForm } from 'types';
import { Logo, AnimatedAstronaut, ButtonBlack } from '../../common/index';
import styles from './Login.module.scss';

export const Login = () => {
  const [login, setLogin] = useState<UserEntityForm>({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <section className={styles.signup}>
      <AnimatedAstronaut />
      <form onSubmit={handleSubmit}>
        <Logo text={'LogIn'} />
        <input
          type='email'
          name='email'
          onChange={handleChange}
          value={login.email}
        />
        <input
          type='password'
          onChange={handleChange}
          value={login.password}
          name='password'
        />

        <ButtonBlack dynamicPath={'login'} buttonName={'Login'} />
      </form>
    </section>
  );
};
