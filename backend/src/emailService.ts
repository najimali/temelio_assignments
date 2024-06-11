interface MockSendEmail{
  from : string,
  to : string,
  subject : string,
  text : string
}

export function mockSendEmail({from, to,subject,text} : MockSendEmail) {
    console.log(`Email sent from ${from} to ${to} with subject "${subject}" and text "${text}"`);
  }
  