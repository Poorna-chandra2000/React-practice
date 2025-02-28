
# Deploying a React App with JSON Server on Vercel

This guide will walk you through deploying a React app that uses JSON Server on **Vercel**. Vercel supports serverless functions, which can be used to simulate the behavior of a backend API using JSON Server.

## Prerequisites

- Node.js installed on your machine.
- Vercel account: [Sign up here](https://vercel.com/signup).
- GitHub account (for Vercel to connect to your project).

## Steps

### 1. **Prepare Your React App (Frontend)**

Ensure that your React app is fully functional locally, and your API calls (e.g., `fetchFruits`) are working as expected.

### 2. **Install `json-server` as a Dependency**

Install `json-server` in your React app to use it in a serverless function.

```bash
npm install json-server
3. Create API Routes Using Serverless Functions
In Vercel, create an api folder in the root of your project to handle serverless API requests.

Create a file for the fruits API, for example api/fruits.js.

Add the following code to api/fruits.js to handle requests using json-server:

javascript
Copy code
// File: api/fruits.js
import jsonServer from 'json-server';
import fs from 'fs';
import path from 'path';

const dbPath = path.resolve('./db.json');

export default function handler(req, res) {
  const server = jsonServer.create();
  const router = jsonServer.router(dbPath);
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  if (req.method === 'GET') {
    // Use json-server's router for GET requests
    server.use(router);
  }

  server(req, res); // Route the request to json-server
}
4. Add Your db.json File
Create a db.json file in the root of your project to store your data. Here is an example of how the db.json might look:

json
Copy code
{
  "fruits": [
    { "id": 1, "name": "Apple" },
    { "id": 2, "name": "Banana" },
    { "id": 3, "name": "Orange" }
  ]
}
5. Deploy Your Project to Vercel
Once the fruits API route is set up and the data is in place, follow these steps to deploy your project to Vercel:

Push your code to a GitHub repository.

Connect your GitHub repository to Vercel via the Vercel dashboard.

Vercel will automatically detect that you are deploying a React app and will handle the deployment.
Make sure your api folder with the serverless functions and the db.json file is included in the repository.
Deploy the project.

6. Update React Code to Use the Vercel Serverless API
In your React app, update your API requests to point to the serverless functions on Vercel. For example:

javascript
Copy code
const fetchFruits = async ({ pageParam = 1 }) => {
  const url = `https://your-vercel-project-name.vercel.app/api/fruits?_page=${pageParam}&_per_page=5`;
  const response = await axios.get(url);
  return response.data;
};
Replace your-vercel-project-name with the actual name of your Vercel project.

7. Test the Deployment
Once your project is deployed, visit your Vercel app URL to verify that the frontend is fetching data correctly from the serverless API.

8. Possible Issues and Workarounds
Cold Starts: Serverless functions take some time to start after being idle. This might result in slight delays during API requests.
File System Access: Serverless functions don't persist the file system. The data in db.json won't be saved between invocations. You may want to use a persistent database (e.g., MongoDB, PostgreSQL) for production.
Rate Limits: Ensure your API calls don't exceed the rate limits of Vercel's serverless functions.
Conclusion
This guide shows how to deploy a React app with JSON Server as a serverless backend on Vercel. For more robust, production-ready backends, consider integrating a persistent database instead of using json-server.

Feel free to customize this guide as needed for your project. If you encounter any issues, check the Vercel documentation for troubleshooting: Vercel Docs.

csharp
Copy code

### Notes:
- Replace `your-vercel-project-name` with the actual project name from your Vercel dashboard when updating the URLs.
- This approach simulates a backend using `json-server` in serverless functions.