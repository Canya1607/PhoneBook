import {getUsers, getUser, getContacts, getContactsById} from './GET';
import {removeUser, removeContact, removeContacts, _clearAll} from './REMOVE';
import {addUser, addContact} from './ADD';
import {updateContact} from './UPDATE';

export default {
  //SET
  addUser,
  addContact,
  //GET
  getUser,
  getUsers,
  getContacts,
  getContactsById,
  //REMOVE
  removeUser,
  removeContact,
  removeContacts,
  ///UPDATE
  updateContact,
  //SPECIAL
  _clearAll,
};
