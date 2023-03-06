const { parse } = require("path");
const path = require("path");
const fs = require("fs").promises;

// const contactsPath =
// const readContacts = async () => {
//   try {
//     const readResult = await fs.readFile(contactsPath);
//     const data = readResult.toString();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = { readContacts };

const contactsPath = path.resolve("db", "contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  try {
    const readResult = await fs.readFile(contactsPath);
    const contacts = readResult.toString();
    const parsedContacts = JSON.parse(contacts);
    return parsedContacts;
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    if (contacts.length > 0) {
      const contactById = contacts.filter(contact => contact.id === contactId);
    }
    
    return contactById
  } catch (error) {
    console.log(error);
  }
}

// async function removeContact(contactId) {
//   try {
//     const readResult = await fs.readFile(contactsPath);
//     const data = readResult.toString();
//     const parsedData = JSON.parse(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function addContact(name, email, phone) {
//   try {
//     const readResult = await fs.readFile(contactsPath);
//     const data = readResult.toString();
//     const parsedData = JSON.parse(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

module.exports = { listContacts, getContactById };
