// dataStore.ts
import { Foundation } from './models/Foundation';
import { Nonprofit } from './models/Nonprofit';
import { EmailLog } from './models/EmailLog';

interface DataStore {
  foundations: Foundation[];
  nonprofits: Nonprofit[];
  emailLogs: EmailLog[];
}

const dataStore: DataStore = {
  foundations: [],
  nonprofits: [],
  emailLogs: [],
};

export default dataStore;
