// The API uses fetch, for the moment, but could be replaces by axios ir such
// as axiso has better browser support
// Axios is a bit more convient and seems to handle errors better
// API:

export const getContacts = ( (seed = 'foobar') => {
/**
 * Gets seeded data from the randomuser.me
 * Number ot item fetched is limited to the value of the resultCount constant 
 * @param {seed} seed is used to get a specific data set. It defaults to foobar
 */
// I simply for this demo, return 100 contacts. In a real case I would have use the pagination that is availble in the API
  const resultCount = 100;

  // There is a need to handle aborted fetches etc. Here is only a simple error handling, no abortcontroller.
  
  return fetch(`https://randomuser.me/api?results=${resultCount}&seed=${seed}`)
    .then( response => response.json() )
    .then( data =>  data.results )
    .catch(error => console.log(error));
});
