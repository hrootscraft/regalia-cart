# Regalia

> eCommerce platform built from scratch with the MERN stack & Redux.
> More features to be worked, expanded & improvised on in future.

![Image](cover-images/ss1.png)

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)

## Usage

### ES Modules in Node

ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Current build compatible with node v16.16.0 and npm v8.11.0 

### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku postbuild script, so if you push to Heroku, no need to build manually for deployment to Heroku

### Seed Database

The following commands seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
![Image](cover-images/ss2.png)
![Image](cover-images/ss3.png)
![Image](cover-images/ss4.png)
![Image](cover-images/ss5.png)
![Image](cover-images/ss6.png)
![Image](cover-images/ss7.png)
![Image](cover-images/ss8.png)
![Image](cover-images/ss9.png)
![Image](cover-images/ss10.png)
