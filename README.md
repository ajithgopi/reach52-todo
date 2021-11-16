# Reach52 - Task TODO Application

## What is Done?
1. A shared TODO application without creation of seperate lists or authentication system

## How to run the app

1. Clone the reposity
2. Run `npm install` on both the `./frontend` and `./backend` folders
3. Open a console in `./backend` folder and start the application using `npm start`
4. Open a console in `./frontend` folder and start the application using `npm start`
5. Open `http://localhost:4200` in a web browser

## Frontend
- Technologies: Angular, SASS
- Start command: `npm start`
- Runs on port: `4200`

### Notes
- The services part have been omitted and the api section now uses the newer fetch api
- You might not find loaders/GUI spinners everywhere
- An internet connection is required to display icons and fonts

## Backend
- Technologies: Express, Mongoose
- Database: MongoDB on atlas (Connection string is intentionally included in `./backend/.env`)
- Start command: `npm start` or `npm run dev` (development version - requires nodemon)
- Runs on port: `3000`
- Default API url: `http://localhost:3000/api`

### APIs information

Note: All routes shall be prefixed with the default API url (`http://localhost:3000/api`)

| Route | Method | Description | Params | Response |
|---|---|---|---|---|
| /list | GET | Fetches all the todo tasks from the database | None | Array of task objects |
| /create | POST | Creates a new task | `content` - The body/text of new task | Newly created task object |
| /mark_done | POST | Sets the `done` status of a task | `item_id` - Mongo ID of the task, `is_done` - new status | Modified task object |
| /delete | DELETE | Deletes a task from the database | `item_id` - Mongo ID of the task | Status object |

## References to thirdparty resources and libraries

1. https://codepen.io/Phixle/pen/oROOvV
2. https://in.pinterest.com/pin/482518547577776566/
3. https://www.npmjs.com/package/spinners-angular
