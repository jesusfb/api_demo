# API Demo README

This is a Node.js Express API project that uses MongoDB as the database and Swagger for documentation. The project provides CRUD (Create, Read, Update, Delete) operations for managing products.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running the following command:
   ```
   npm install
   ```
3. Set up the MongoDB connection by providing the necessary configuration details in .env file.
4. Start the server by running the following command:
   ```
   node app
   ```
5. The API will be accessible at `http://localhost:8000/api/products`.

## API Endpoints

The following endpoints are available in the API:

### Get all products

- Endpoint: `GET /api/products`
- Description: Retrieve a list of all products.
- Response:
  - Status: 200 OK
  - Content: JSON array containing product objects.
  - Schema: [Product](#product-schema)

### Get product by ID

- Endpoint: `GET /api/products/{id}`
- Description: Get a specific product by its ID.
- Path Parameters:
  - `id` (string, required): The ID of the product.
- Response:
  - Status: 200 OK
  - Content: JSON object representing the product.
  - Schema: [Product](#product-schema)
- Error Responses:
  - Status: 404 Not Found
    - Description: The requested product was not found.
  - Status: 500 Internal Server Error
    - Description: Some server error occurred.

### Create a new product

- Endpoint: `POST /api/products`
- Description: Create a new product.
- Request Body:
  - Content-Type: application/json
  - Schema: [Product](#product-schema)
- Response:
  - Status: 200 OK
  - Content: JSON object representing the created product.
  - Schema: [Product](#product-schema)
- Error Response:
  - Status: 500 Internal Server Error
    - Description: Some server error occurred.

### Update a product

- Endpoint: `PATCH /api/products/{id}`
- Description: Update an existing product by its ID.
- Path Parameters:
  - `id` (string, required): The ID of the product to update.
- Request Body:
  - Content-Type: application/json
  - Schema: [Product](#product-schema)
- Response:
  - Status: 200 OK
  - Content: JSON object representing the updated product.
  - Schema: [Product](#product-schema)
- Error Responses:
  - Status: 404 Not Found
    - Description: The product to update was not found.
  - Status: 500 Internal Server Error
    - Description: Some server error occurred.

### Delete a product

- Endpoint: `DELETE /api/products/{id}`
- Description: Delete a product by its ID.
- Path Parameters:
  - `id` (string, required): The ID of the product to delete.
- Response:
  - Status: 200 OK
    - Description: The product was successfully deleted.
- Error Responses:
  - Status: 404 Not Found
    - Description: The product to delete was not found.
  - Status: 500 Internal Server Error
    - Description: Some server error occurred.

## Data Model

The API works with products, which have the following schema:

```json
{
  "_id": "string",
  "name": "string",
  "price": "number",
  "company": "string",
  "featured": "boolean",
  "ratings": "number",
  "createdAt": "string"
}
