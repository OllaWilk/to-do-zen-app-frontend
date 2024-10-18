import React, { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { UserEntityForm } from '@alexwilk/spacesteps-types';
import { useUserAuth, useToggle } from '../../../utils/hooks/index';
import {
  Logo,
  AnimatedAstronaut,
  ButtonBlack,
  Footer,
} from '../../common/index';
import styles from './Signup.module.scss';

// Signup component for user registration
export const Signup = () => {
  // Initial form values
  const formValues: UserEntityForm = {
    email: '',
    password: '',
  };

  // useState hook to manage form data
  const [data, setData] = useState(formValues);
  // Custom hook for user authentication
  const { auth, error, isLoading } = useUserAuth();
  // Custom hook for toggling password visibility
  const [isToggled, toggle] = useToggle(true);

  // Handle input change events
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    await auth(data.email, data.password, 'signup'); // Call auth function with email and password
  };

  return (
    <>
      <section className={styles.signup}>
        <form onSubmit={handleSubmit}>
          <Logo text={'SplotApp'} />
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
              {isToggled ? <FaRegEyeSlash /> : <FaRegEye />}
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
      <Footer />
    </>
  );
};
