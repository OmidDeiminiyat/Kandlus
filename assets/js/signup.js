// main.js
import insertIntoSubscribeTable from './controller/insertSubscribe.js';

const newData = {
  email: 'example@example.com',
  Code: '3566',
  // Add other necessary fields here
};

insertIntoSubscribeTable(newData);
