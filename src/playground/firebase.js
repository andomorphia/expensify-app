/* eslint-disable no-console */
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBbR2KwAZk6yNZOPBnpKZtR_1zh1hcAO7c',
  authDomain: 'expensify-ec3a0.firebaseapp.com',
  databaseURL: 'https://expensify-ec3a0.firebaseio.com',
  projectId: 'expensify-ec3a0',
  storageBucket: 'expensify-ec3a0.appspot.com',
  messagingSenderId: '405269502542',
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}, (e) => {
  console.log('Error with data fetching', e);
});

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });

//   console.log(expenses);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'Rent from last month',
//   amount: 109500,
//   createdAt: 123456789,
// });

// database.ref('notes/-LGge9SrhIf32w763Ut-').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python',
// });

// const firebaseNotes = {
//   notes: {
//     somegeneratedid: {
//       title: 'First note',
//       body: 'This is my note',
//     },
//     anothergeneratedid: {
//       title: 'Another note',
//       body: 'This is my note',
//     },
//   },
// };

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is my note',
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note',
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Jonathan Berthier',
//   age: 28,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google',
//   },
//   location: {
//     city: 'Seyssins',
//     country: 'France',
//   },
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle',
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed.');
//   }).catch((e) => {
//     console.log('Did not remove data.', e);
//   });
