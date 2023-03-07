const path = require("path");
const fs = require("fs").promises;
const shortid = require("shortid");

const contactsPath = path.resolve("db", "contacts.json");

/**
 * Reading of contacts.json
 * @returns {array} - list of contacts.
 */
async function listContacts() {
  const readResult = await fs.readFile(contactsPath);
  const contacts = JSON.parse(readResult);
  return contacts;
}

/**
 * Reading of contacts.json, search in the array of the contact by the given id.
 * @param {string} contactId - id of the contact that needs be found
 * @returns {object} contactById - contact found or null.
 */
async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactById = contacts.find((contact) => Number(contact.id) === contactId);
  if (!contactById) {
    return null;
  }
  return contactById;
}

/**
 * Reading of contacts.json and adding new contact.
 * @param {string} name - name of the new contact.
 * @param {string} email - email of the new contact.
 * @param {string} phone - phone number of the new contact 
 * @returns {string} message if new contact were added successfully.
 */
async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: shortid.generate(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return "OK"
}

/**
 * Reading of contacts.json, search in the array of the contact by the given id and removes it from list.
 * @param {string} contactId - id of the contact that needs be removed
 * @returns {object} contacts[idx] - removed contact or null.
 */
async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => Number(contact.id) === contactId);
  if (idx === -1) {
    return null;
  }
  const newContactsList = contacts.filter((_, index) => index !== idx);
  await fs.writeFile(contactsPath, JSON.stringify(newContactsList));
  return contacts[idx];
}

module.exports = { listContacts, getContactById, addContact, removeContact };
