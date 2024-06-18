import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
  const value = useSelector((state) => state.counter.value);
  const { firstName, lastName } = useSelector((state) => state.credentials);
  return (
    <div>
      <h1>About Page</h1>
      <p>Counter value: {value}</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
    </div>
  );
};

export default About;