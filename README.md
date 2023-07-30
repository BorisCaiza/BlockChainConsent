# BlockChainConsent

For the correct execution of the system, you have to have nodejs installed,

## Frontend

The frontend of the project is developed in React.js. To run it, follow these steps:

1. Download the frontend folder.
2. Run `npm i` in the downloaded folder to install the dependencies.
3. Then, use `npm start` to launch the application.

## Backend

The backend of the project is built with Node.js and uses a non-relational MongoDB database. To set up and run the backend, follow these steps:

1. Open the `database.js` file inside the backend folder.
2. Change the MongoDB connection address as needed.
3. Run `npm i` to install the dependencies.
4. Use `npm run dev` to start the backend server.

## JunkDataGeneration

For the generation of junk data, the code from the JunkDataGeneration.ipnyb file was used.

1. Run the library installation cell.
2. Run the second cell of the file. (Users are generated)
3. Run the third cell of the file. (Put in the for the number of blocks you want to generate)
4. Export the .json files to the database users and blockchains collections in MongoDB.


