import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

import { UserEntityForm } from 'types';
import { useSignup, useToggle } from '../../../utils/hooks/index';
import { Logo, AnimatedAstronaut, ButtonBlack } from '../../common/index';
import styles from './Signup.module.scss';

export const Signup = () => {
  const formValues: UserEntityForm = {
    email: '',
    password: '',
  };
  const [data, setData] = useState(formValues);
  const { signup, error, isLoading } = useSignup();
  const [isToggled, toggle] = useToggle(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signup(data.email, data.password);
  };

  return (
    <section className={styles.signup}>
      <form onSubmit={handleSubmit}>
        <Logo text={'SpaceSteps'} />
        <div className={styles.inputWrapper}>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            value={data.email}
            placeholder='Email'
            required
          />
          <span className={styles.eyeIcon}>
            <MdAlternateEmail />
          </span>
        </div>
        <div className={`${styles.inputWrapper} `}>
          <input
            type={isToggled ? 'password' : 'text'}
            onChange={handleChange}
            value={data.password}
            name='password'
            placeholder='Password'
            required
          />
          <span
            onClick={toggle}
            className={`${styles.eyeIcon} ${styles.passwordIcon}`}
          >
            {!isToggled ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
        <ButtonBlack buttonName={'Sign up'} disabled={!!isLoading} />
        {error && <p className={styles.error}>{error}</p>}
        <Link style={{ color: '#080808' }} to={'/login'}>
          Switch and log in here!
        </Link>
      </form>
      <AnimatedAstronaut />
    </section>
  );
};
