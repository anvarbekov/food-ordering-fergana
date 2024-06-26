# Build Full-Food-Ordering By Next.js 13+, App Router, Server Components and Actions

|                |                                                        |
| -------------- | ------------------------------------------------------ |
| Tech           | Nextjs 13+, Server Components & Actions, Route Handler |
| UI             | Tailwind, DaisyUI, Chart.js                            |
| Database       | MongoDB, Mongoose                                      |
| Payment        | PayPal, Stripe                                         |
| Deployment     | Github, Vercel, MongoDB Atlas                          |
| Authentication | Auth.js, Google Auth                                   |
| Others         | Cloudinary, Zustand, SWR                               |

![Food Ordering](/public/app.jpg)

## Resources

- Youtube Video : https://www.youtube.com/channel/UC61vQBJv3D1rH-5rl8zG2qg
- Demo Website :  https://food-ordering-fergana.vercel.app/


## Run Locally

1. Clone repo

   ```shell
    $ cd food-ordering
   ```

2. Create .env File

   - duplicate .env.example and rename it to .env

3. Setup MongoDB

   - Local MongoDB
     - Install it from [here](https://www.mongodb.com/try/download/community)
     - In .env file update MONGODB_URI=mongodb://localhost/food-ordering
   - OR Atlas Cloud MongoDB
     - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
     - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

4. Install and Run

   ```shell
     npm install
     npm run dev
   ```

5. Seed Data

   - Run this on browser: http://localhost:3000/api/seed

6. Admin Login

   - Run http://localhost:3000/signin
   - Enter Admin email "admin@example.com" and password "admin01" and click Signin#   f o o d - o r d e r i n g - f e r g a n a  
 