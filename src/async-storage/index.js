import {getUsers, getUser, getContacts, getContactsById, getKeys} from './GET';
import {removeUser, removeContact, removeContacts, _clearAll} from './REMOVE';
import {addUser, addContact} from './ADD';
import {updateContact} from './UPDATE';

export default {
  //SET
  addUser,
  addContact,
  //GET
  getUsers,
  getUser,
  getContacts,
  getContactsById,
  getKeys,
  //REMOVE
  removeUser,
  removeContact,
  removeContacts,
  _clearAll,
  ///UPDATE
  updateContact,
};
