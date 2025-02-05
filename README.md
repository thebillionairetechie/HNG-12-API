# Express Server with CORS and Environment Variables
Welcome to my simple Express server setup. This project uses Express, CORS, and dotenv to create a basic API that gives you a little information along with the current date and time whenever you hit the root endpoint.

## Content
- **Express**: A fast and lightweight Node.js web framework that powers the server.
- **CORS**: This helps the server handle requests from other origins (useful for frontend-backend interactions).
- **dotenv**: A package that helps us manage environment variables securely.
- **Node.js**: The environment that runs the app.

## How to Get It Running Locally
To run locally:

1. First, clone the repository:
   ```bash
   git clone https://github.com/thebillionairetechie/HNG-12-API.git
   ```

2. Go into the project folder:
   ```bash
   cd HNG-12-API
   ```

3. Install all the dependencies:
   ```bash
   npm install
   ```

4. (Optional but recommended) Create a `.env` file in the root directory to configure your environment variables:
   ```
   PORT=3000
   ```

## How to Use It

1. Once you've set everything up, start the server with this command:
   ```bash
   npm start
   ```

2. The server will be running, and you can visit it on:
   ```
   http://localhost:3000
   ```

3. Go ahead and hit the root endpoint (`/`), and you'll get a JSON response that looks like this:
   ```json
   {
     "email": "peaceamudipe@gmail.com",
     "current_datetime": "2025-02-05T12:34:56Z",
     "github_url": "https://github.com/thebillionairetechie/HNG-12-API"
   }
   ```

## Environment Variables

I’m using the `dotenv` package to manage environment variables. You can add your own variables by creating a `.env` file in the root folder.

Here’s the key variable:

- `PORT`: This determines the port your server will listen to. If you don’t specify it, it defaults to `3000`.

Example `.env` file:
```
PORT=your-port-of-choice
```

## Available Endpoints

- **GET `/`**: This gives you a JSON response with my email, the current date and time, and a link to my GitHub.

Example response:
```json
{
  "email": "peaceamudipe@gmail.com",
  "current_datetime": "2025-02-05T12:34:56Z",
  "github_url": "https://github.com/thebillionairetechie/HNG-12-API"
}
```
## License
It’s open-source, licensed under the MIT License.
