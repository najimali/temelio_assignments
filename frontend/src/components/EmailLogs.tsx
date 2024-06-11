import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const EmailLogs: React.FC = () => {
  const [emails, setEmails] = useState<any[]>([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await axios.get('/emails/');
      setEmails(response.data);
    };

    fetchEmails();
  }, []);

  return (
    <div>
      <h2>Email Logs</h2>
      <ul className="list-group">
        {emails.map((email, index) => (
          <li key={index} className="list-group-item">
            <strong>From:</strong> {email.foundationEmail} <strong>To:</strong> {email.nonprofitEmail} <br />
            <strong>Date:</strong> {email.date} <br />
            <strong>Content:</strong> {email.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailLogs;
