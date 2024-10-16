import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const existingContacts = await readContacts();
  const newContacts = Array.from({ length: number }, createFakeContact);
  const updatedContacts = existingContacts.concat(newContacts);
  await writeContacts(updatedContacts);
  console.log('Contacts generated and saved!');
};

generateContacts(5);
