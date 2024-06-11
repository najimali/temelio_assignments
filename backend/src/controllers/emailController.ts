import { Request, Response } from 'express';
import dataStore from '../dataStore'
import { EmailLog } from '../models/EmailLog';
import { mockSendEmail } from '../emailService';

export const getAllEmails = (req: Request, res: Response) => {

  res.json(dataStore.emailLogs);
};


export const sendEmail = (req: Request, res: Response) => {
  const { foundationEmail, nonprofitEmails } = req.body;
  nonprofitEmails.forEach((email: string) => {
    const nonprofit = dataStore.nonprofits.find(n => n.email === email);
    if (nonprofit) {
      const message = `Sending money to nonprofit ${nonprofit.name} at address ${nonprofit.address}`;
      const emailLog: EmailLog = {
        foundationEmail : foundationEmail,
        nonprofitEmail: nonprofit.email,
        content : message,
        date : new Date().toISOString(),
      };
      dataStore.emailLogs.push(emailLog);
      mockSendEmail({
        from : foundationEmail,
        to : nonprofit.email,
        subject : message,
        text : message
      })
    }
  });
  res.json({ message: 'Emails sent successfully!' });
};