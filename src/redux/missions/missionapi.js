const getMissions = async () => {
  const res = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await res.json();
  return data;
};

export default getMissions;
// export const postBook = async (books) => {
//   await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Mw1U4sRoKvmi9GEOKqfn/books/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(books),
//   });
// };

// export const deleteBook = async (id) => {
//   await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Mw1U4sRoKvmi9GEOKqfn/books/${id}`,
//     {
//       method: 'DELETE',
//     });
// };
