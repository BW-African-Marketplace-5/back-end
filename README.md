# <center>Evends Backend</center>

[Heroku App](https://evendsapi.herokuapp.com)

Base Url: https://evendsapi.herokuapp.com

#### Pitch

Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.  You will build a platform to enable these business owners to create listing for items they have for sale.

#### MVP

- A small business owner can log on and see relevant prices in various categories to help them set their own prices.
- They can also make listing for what they want to sell, which will show up to all users.
- They add a new item by selecting their market location, and then typing in their item name, description, and price.

# Authentication Endpoints:

## POST /api/login

#### Expected request body:

```
{
    "username": "testuser",
    "password": "password123"
}
```

#### Returns:

```
{
  "message": "Welcome testuser!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ik1hbmdvIExhZHkgNSIsImlhdCI6MTU3ODMwNjcyMCwiZXhwIjoxNTc4MzkzMTIwfQ.12_cwuiSBhWr99lf7Pkin5vS52biRD9lPneKE0giAYQ"
}
```

## POST /api/register

#### Expected request body:

```
{
    "username": "testuser",
    "password": "password123"
}
```

#### Returns:

```{
  "id": 4,
  "username": "testuser"
}
```

# User Endpoints:

## GET /api/users

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
An array of all registered users with id and username.
```

```
[
  {
    "id": 1,
    "username": "Alford Dawltrey",
  },
  {
    "id": 2,
    "username": "Caritta Ranaghan",
  },
  {
    "id": 3,
    "username": "Georgeta Roddie",
  }
]
```

## GET /api/users/:id

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
A specific user by user id.
```

```
{
  "id": 10,
  "username": "Denver Ramalhete",
}
```

## GET /api/users/current

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
The id and username of the current logged in user.
```

```
{
  "currentUserId": 13,
  "currentUsername": "Mango Lady"
}
```

# Products Endpoints:

## GET /api/products

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
An array of objects of all listed products.
```

```
[
  {
    "id": 1,
    "category": "Meats",
    "market_area": "Rwanda",
    "name": "Chicken Breast",
    "description": "1 pound Boneless Skinless",
    "price": "1,100.00 RWF",
    "username": "Dorri Pedrozzi",
    "user_id": 6,
    "image_url": "https://imgur.com/PoY6nZd"
  },
  {
    "id": 2,
    "category": "Meats",
    "market_area": "Rwanda",
    "name": "Beef Round",
    "description": "or Equivalent Back Leg Red Meat (1 pound)",
    "price": "500.00 RWF",
    "username": "Dorri Pedrozzi",
    "user_id": 6,
    "image_url": "https://imgur.com/EEGqr8E"
  },
  {
    "id": 3,
    "category": "Vegetables",
    "market_area": "Rwanda",
    "name": "Beans",
    "description": "2 pounds Beans",
    "price": "1,600.00 RWF",
    "username": "Abra Arkow",
    "user_id": 4,
    "image_url": "https://imgur.com/yNDFASn"
  }
]
```

## GET /api/products/:id

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:
```
Product by any product id number. I am not sure of the applicable usage of this endpoint.
```

```
{
  "id": 28,
  "category": "Other",
  "market_area": "Uganda",
  "name": "Eggs",
  "description": "2 Dozen brown",
  "price": "12,000.00 UGX",
  "user_id": 8,
  "image_url": "https://imgur.com/Kbd0eDI"
}
```

## GET /api/products/:id/user

```
Note: ':id' in the above GET url should be the logged in user's id. If this endpoint was needed for any reason.
```

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```

### Returns:

```
All the products for a specific user by the user id.
```

```
[
  {
    "username": "Denver Ramalhete",
    "user_id": 10,
    "product_id": 17,
    "category": "Vegetables",
    "market_area": "Kenya",
    "name": "Onion",
    "description": "yellow 1 kg",
    "price": "115.05 KSh",
    "image_url": "https://imgur.com/Y7S7BZ6"
  },
  {
    "username": "Denver Ramalhete",
    "user_id": 10,
    "product_id": 18,
    "category": "Grains",
    "market_area": "Kenya",
    "name": "Rice",
    "description": "1 kg",
    "price": "167.85 KSh",
    "image_url": "https://imgur.com/LH41g7W"
  },
  {
    "username": "Denver Ramalhete",
    "user_id": 10,
    "product_id": 21,
    "category": "Vegetables",
    "market_area": "Kenya",
    "name": "Onion",
    "description": "regular 1 liter",
    "price": "115.05 KSh",
    "image_url": "https://imgur.com/Y7S7BZ6"
  }
]
```
## POST /api/:id/products

```
Note 1: ':id' in the above POST url should be the logged in user's id.
Note 2: image url can be left blank.
```

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```
### Expected request input:

```
{
 "category": "Other",
 "market_area": "Ethiopia",
 "name": "Groundnuts",
 "description": "12 pounds",
 "price": "500.00 ED",
 "image_url": "https://imgur.com/KQPxtCM"
}
```

### Returns:

```
{
  "id": 29,
  "category": "Other",
  "market_area": "Ethiopia",
  "name": "Groundnuts",
  "description": "12 pounds",
  "price": "500.00 ED",
  "user_id": "10",
  "image_url": "https://imgur.com/KQPxtCM"
}
```