import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';
import { Container, Stack, Button, ListGroup } from 'react-bootstrap';

const Home: React.FC = () => {
  const [emails, setEmails] = useState<any[]>([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axios.get('/emails/');
      setEmails(response.data);
    };

    fetchEmails();
  }, []);

  return (
    <Container>
      <h1 className="mt-4">Foundation Email Management</h1>
      <Stack direction="horizontal" gap={3} className="my-4">
        <Link to="/new-foundation">
          <Button variant="primary">Create New Foundation</Button>
        </Link>
        <Link to="/new-nonprofit">
          <Button variant="primary">Create New Nonprofit</Button>
        </Link>
        <Link to="/send-email">
          <Button variant="primary">Send Email</Button>
        </Link>
      </Stack>
      <h2>All Sent Emails</h2>
      <ListGroup>
        {emails.map((email, index) => (
          <ListGroup.Item key={index}>
            <strong>From:</strong> {email.foundationEmail} <strong>To:</strong> {email.nonprofitEmail} <br />
            <strong>Date:</strong> {email.date} <br />
            <strong>Content:</strong> {email.content}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Home;
