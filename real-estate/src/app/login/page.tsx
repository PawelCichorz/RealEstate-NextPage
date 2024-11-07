'use client';
import React from 'react';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './loginStyles';
import { loginBackend } from '../lib/api';
import RedBanner from '../Components/RedBanner';
import { useAuth } from '../contex/AuthContex';

function Login() {
  const { login } = useAuth();

  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<{
    email: string;
    password: string;
  }>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async () => {
    try {
      const response = await loginBackend(
        getValues('email'),
        getValues('password')
      );
      console.log(response.status);
      if (response.status === 200) {
        login();
      } else {
        setLoginError('Nieprawidłowy email lub hasło');
      }
    } catch (error: unknown) {
      setLoginError('Nieprawidłowy email lub hasło');
    }
  };
  return (
    <>
      <RedBanner
        text="Logowanie"
        buttonText=""
        buttonStyle={{ border: 'none' }}
        textStyle={{ marginLeft: '20px' }}
        divStyle={{ justifyContent: 'flex-start' }}
      />
      <S.Container method="POST" onSubmit={handleSubmit(onSubmit)}>
        <S.EmailDiv>
          <label htmlFor="email">Email:</label>
          <S.Input
            id="email"
            type="email"
            {...register('email', { required: 'Email jest wymagany' })}
          />
          {errors.email ? (
            <p> {errors.email.message as React.ReactNode} </p>
          ) : null}
        </S.EmailDiv>
        <S.PasswordDiv className="password">
          <label htmlFor="password">Hasło:</label>
          <S.Input
            id="password"
            type="password"
            {...register('password', { required: 'Hasło jest wymagane' })}
          />
          {errors.password && (
            <p>{errors.password.message as React.ReactNode}</p>
          )}
        </S.PasswordDiv>
        {loginError && <p>{loginError}</p>}
        <S.Button data-testid="login-button" type="submit">
          ZALOGUJ
        </S.Button>
      </S.Container>
    </>
  );
}

export default Login;
