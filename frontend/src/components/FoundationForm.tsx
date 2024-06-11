import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const FoundationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await axios.post('/foundations', { email });
    navigate('/');
  };

  return (
    <Container>
      <h2 className="mt-4">Create New Foundation</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Add Foundation</Button>
      </Form>
    </Container>
  );
};

export default FoundationForm;
