import { contactsReducer } from './../../reducers';
import { 
  CONTACTS_REQUESTED,
  CONTACTS_REQUESTED_SUCCESS
 } from './../../actions'
import { lchmod } from 'fs';

describe('contactsReducer', () => {
  it('should return the initial state', () => {
    expect(contactsReducer(undefined, {})).toEqual({persons: []});
  });

  it('should handle CONTACTS_REQUESTED', () => {
    const startAction = {
      type: CONTACTS_REQUESTED
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(contactsReducer({}, startAction)).toEqual({});
  });

  it('should handle GET_POST_SUCCESS', () => {
    const successAction = {
      type: CONTACTS_REQUESTED_SUCCESS,
      payload: {contacts: mockData}, // important to pass correct payload, that's what the tests are for ;)
    };
    expect(contactsReducer({}, successAction)).toEqual({ persons: mockData } );
  });
});


const mockData = [
  {
    "gender": "female",
    "name": {
      "title": "miss",
      "first": "becky",
      "last": "sims"
    },
    "location": {
      "street": "6894 windsor road",
      "city": "stirling",
      "state": "durham",
      "postcode": "Q4 8YT"
    },
    "email": "becky.sims@example.com",
    "login": {
      "username": "brownduck326",
      "password": "missouri",
      "salt": "NuJHyJ9Z",
      "md5": "10be07f2d1052f6fc04b1788e31d5e3b",
      "sha1": "f28ca2d01b49c3011e6beba774414af8521d0d75",
      "sha256": "70c3460949945b3912ec3903da43d1cacaa2c2aa3770668f4ab07a602c2e3ccb"
    },
    "dob": "1991-03-17 09:11:50",
    "registered": "2014-04-06 03:47:45",
    "phone": "017684 66711",
    "cell": "0765-055-205",
    "id": {
      "name": "NINO",
      "value": "PA 88 25 20 D"
    },
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/67.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
    },
    "nat": "GB"
  }
]