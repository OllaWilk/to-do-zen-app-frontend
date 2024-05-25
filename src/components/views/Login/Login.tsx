import React, { ChangeEvent, useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { UserEntityForm } from 'types';
import { useSignup, useToggle } from '../../../utils/hooks/index';
import { Logo, AnimatedAstronaut, ButtonBlack } from '../../common/index';
import styles from './Login.module.scss';

export const Login = () => {
  const formValues: UserEntityForm = {
    email: '',
    password: '',
  };

  const [data, setData] = useState(formValues);
  const { error, isLoading } = useSignup();
  const [isToggled, toggle] = useToggle(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit', data);
  };

  return (
    <section className={styles.login}>
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
        <ButtonBlack buttonName={'LogIn'} disabled={!!isLoading} />
        {error && <p className={styles.error}>{error}</p>}
        <Link style={{ color: '#080808' }} to={'/signup'}>
          Switch and signup here!
        </Link>
      </form>
      <AnimatedAstronaut />
    </section>
  );
};
