export const CONTACTS_REQUESTED = 'COMTACTS_REQUESTED';
export const CONTACTS_REQUESTED_SUCCESS = 'COMTACTS_REQUESTED_SUCCESS';


export const requestContacts = () => ({type: CONTACTS_REQUESTED});
export const requestContactsSuccess = contacts => ({type: CONTACTS_REQUESTED_SUCCESS, payload: { contacts }});

