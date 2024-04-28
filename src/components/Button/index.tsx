import React from 'react';
import { ButtonLink } from './styles';

type Props = {
  title: string;
  to: string;
  children: React.ReactNode;
};

const Button = ({ title, to, children }: Props) => {
  return (
    <>
      <ButtonLink to={to} title={title}>{children}</ButtonLink>
    </>
  );
};

export default Button;