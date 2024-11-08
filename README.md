# RealEstate-NextPage

An interactive real estate website for property agencies, built using **Next.js**. The site fetches property listings from a MongoDB database and includes a full user registration and login system, token validation and refresh, logout functionality, the ability to add/remove and promote property listings, as well as an advanced search feature. It also supports pagination for displaying property offers.

## Features

- **User Authentication**: Full user registration and login system, including token management for authentication and authorization.
- **Property Management**: Users can add, remove, and promote property listings.
- **Advanced Search**: Detailed search functionality that allows filtering by type, category, municipality, city, price, and area.
- **Pagination**: Property listings are paginated to improve performance and user experience.
- **Responsive Design**: The website is fully responsive and optimized for mobile and desktop devices.
- **Security**: The application implements middleware to secure routes and validate authentication tokens.
- **Email Notifications**: Integration with **NodeMailer** for sending notifications and emails.

## Technologies Used

- **Next.js** – A React framework for building server-rendered applications (SSR).
- **MongoDB** – Database to store property listings.
- **NodeMailer** – Used for sending emails through the platform.
- **React Hook Form** – For handling form validation and submission.
- **Styled Components** – For writing CSS styles directly in JavaScript.
- **Mongoose** – ODM for MongoDB to interact with the database.
- **JWT (JSON Web Tokens)** – Used for authentication and token management.
- **Middleware** – To protect sensitive routes and manage session tokens.

## Installation

   git clone https://github.com/PawelCichorz/RealEstate-NextPage.git

   npm install

   npm run dev

## Owner
pawelcichorz74@gmail.com
