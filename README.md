# <center>Evends Backend</center>

[Heroku App](https://salty-nick.herokuapp.com)

#### Pitch



#### MVP



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
  "username": "testuser",
  "password": "$2a$12$wULTczvN4Wd5UXkfwShqfuKRfUEPHnnKZO96pL1DOlZhkecsRqTkS"
}
```

# User Endpoints:

## GET /api/users

### Expected request headers:

```
Content-Type: application/json
```

### Returns:

```
[
  {
    "id": 1,
    "username": "Alford Dawltrey",
    "password": "ltvY1wtKh3"
  },
  {
    "id": 2,
    "username": "Caritta Ranaghan",
    "password": "cc3akN6S"
  },
  {
    "id": 3,
    "username": "Georgeta Roddie",
    "password": "GfxMLA"
  }
]
```

## GET /api/users/:id

### Expected request headers:

```
Content-Type: application/json
```

### Returns:

```
note: Returned password will be encoded, so write down your testuser password.
```


```
{
  "id": 10,
  "username": "Denver Ramalhete",
  "password": "$2a$12$wULTczvN4Wd5UXkfwShqfuKRfUEPHnnKZO96pL1DOlZhkecsRqTkS"
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
An array of objects of all products.
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
    "user_id": 6
  },
  {
    "id": 2,
    "category": "Meats",
    "market_area": "Rwanda",
    "name": "Beef Round",
    "description": "or Equivalent Back Leg Red Meat (1 pound)",
    "price": "500.00 RWF",
    "user_id": 6
  },
  {
    "id": 3,
    "category": "Vegetables",
    "market_area": "Rwanda",
    "name": "Beans",
    "description": "2 pounds Beans",
    "price": "1,600.00 RWF",
    "user_id": 4
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
Product by id number.
```

```
{
  "id": 27,
  "category": "Meats",
  "market_area": "Uganda",
  "name": "Beef Round",
  "description": "0.15 kg (or Equivalent Back Leg Red Meat)",
  "price": "1,612.50 UGX",
  "user_id": 9
}
```

## GET /api/products/:id/user

```
note: :id is the user id
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
    "username": "Gabi Stringer",
    "user_id": 8,
    "product_id": 22,
    "category": "Fruits",
    "market_area": "Uganda",
    "name": "Oranges",
    "description": "0.30 kg",
    "price": "975.00 UGX"
  },
  {
    "username": "Gabi Stringer",
    "user_id": 8,
    "product_id": 24,
    "category": "Meats",
    "market_area": "Uganda",
    "name": "Beef Round",
    "description": "0.15 kg (or Equivalent Back Leg Red Meat)",
    "price": "1,612.50 UGX"
  },
  {
    "username": "Gabi Stringer",
    "user_id": 8,
    "product_id": 28,
    "category": "Other",
    "market_area": "Uganda",
    "name": "Eggs",
    "description": "2 Dozen brown",
    "price": "12,000.00 UGX"
  }
]
```
## POST /api/products

### Expected request headers:

```
Content-Type: application/json
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTczODcxNDk5LCJleHAiOjE1NzM4NzUwOTl9.AEUWImMp4Tx8mMNIGYy7s6J_e3sB6zVuja7lYwcUSiU"
```
### Expected request input:

```
NOTE: I WILL NEED TO MODIFY THIS POST REQUEST TO INCLUDE THE USER_ID IN THE URL RATHER THAN PUT IT IN THE EXPECTED INPUT
```

```
{
	"category": "Other",
	"market_area": "Uganda",
	"name": "Ground Nuts",
	"description": "2 pounds",
	"price": "1200 UGX",
	"user_id": 11
}
```

### Returns:

```
{
  "id": 30,
  "category": "Other",
  "market_area": "Uganda",
  "name": "Ground Nuts",
  "description": "2 pounds",
  "price": "1200 UGX",
  "user_id": 11
}
```