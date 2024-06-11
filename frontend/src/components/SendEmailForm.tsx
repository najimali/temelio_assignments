import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig'; // Import the Axios instance
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import Select, { MultiValue, SingleValue } from 'react-select';

interface Nonprofit {
  name: string;
  email: string;
}

interface Foundation {
  email: string;
}

interface FoundationOption {
  value: string;
  label: string;
}

const SendEmailForm: React.FC = () => {
  const [selectedFoundationEmail, setSelectedFoundationEmail] = useState<FoundationOption | null>(null);
  const [selectedNonprofits, setSelectedNonprofits] = useState<Nonprofit[]>([]);
  const [nonprofits, setNonprofits] = useState<Nonprofit[]>([]);
  const [foundations, setFoundations] = useState<Foundation[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNonprofits = async () => {
      const response = await axios.get('/nonprofits');
      setNonprofits(response.data);
    };

    const fetchFoundations = async () => {
      const response = await axios.get('/foundations');
      setFoundations(response.data);
    };

    fetchNonprofits();
    fetchFoundations();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFoundationEmail) return;
    const nonprofitEmails = selectedNonprofits.map(nonprofit => nonprofit.email);
    await axios.post('/emails/send', { foundationEmail: selectedFoundationEmail.value, nonprofitEmails });
    navigate('/');
  };

  const handleFoundationChange = (selectedOption: SingleValue<FoundationOption>) => {
    setSelectedFoundationEmail(selectedOption);
  };

  const handleNonprofitChange = (selectedOptions: MultiValue<{ label: string; value: string }>) => {
    const transformedOptions = selectedOptions.map(nonProfit => {
      return {
        name: nonProfit.label,
        email: nonProfit.value,
      };
    });
    setSelectedNonprofits(transformedOptions);
  };

  const foundationOptions = foundations.map(foundation => ({
    value: foundation.email,
    label: foundation.email,
  }));

  const nonprofitOptions = nonprofits.map(nonprofit => ({
    value: nonprofit.email,
    label: nonprofit.email,
  }));

  return (
    <Container>
      <h2 className="mt-4">Send Email</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Foundation Email</Form.Label>
          <Select
            value={selectedFoundationEmail}
            options={foundationOptions}
            onChange={handleFoundationChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nonprofit Emails</Form.Label>
          <Select
            isMulti
            options={nonprofitOptions}
            onChange={handleNonprofitChange}
            value={selectedNonprofits.map(nonprofit => ({
              value: nonprofit.email,
              label: nonprofit.name,
            }))}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Send Email</Button>
      </Form>
    </Container>
  );
};

export default SendEmailForm;
