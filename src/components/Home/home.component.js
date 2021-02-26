import React from 'react';
import './index.css';
import Form from '../Form/Form.component';

function Home() {
  return (
    <div className="header">
      <h1>FIND YOUR UNSPLASH PHOTO</h1>
      <Form formClass={'home-form'} />
    </div>
  );
}

export default Home;
