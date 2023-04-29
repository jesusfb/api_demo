import express from "express";
import { getAllProducts,getProduct,postProduct ,updateProduct,deleteProduct} from "../controllers/products.js";
export const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - company
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: The product name
 *         price:
 *           type: number
 *           description: The products's price
 *         company:
 *           type: string
 *           description: The product's company name
 *         featured:
 *           type: boolean
 *           description: Indicate if product is featured
 *         ratings:
 *           type: number
 *           description: The product's ratings
 *         createdAt:
 *           type: string
 *           description: The product's creation date
 *       example:
 *         name: iphone
 *         price: 1500
 *         company: apple
 *         featured: true
 */
/**
  * @swagger
  * tags:
  *   name: Products
  *   description: The products managing API
  */
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve a list of products.
 *     tags:  [Products]
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type:  array
 *               $ref: '#/components/schemas/Product'  
 */

router.route("/").get(getAllProducts);
/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 644a6413ff4e08cd4953eb04
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: The product was not found
 *       500:
 *         description: Some server error
 */
router.route("/:id").get(getProduct);
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */
router.route('/').post(postProduct);
/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *    summary: Update the product by the id
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        default: 644a6413ff4e08cd4953eb04
 *        description: The product id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
 *    responses:
 *      200:
 *        description: The product was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Product'
 *      404:
 *        description: The product was not found
 *      500:
 *        description: Some server error
 */
router.route('/:id').patch(updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Remove the product by id
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         default: 644a6413ff4e08cd4953eb04
 *         description: The product id
 * 
 *     responses:
 *       200:
 *         description: The product was deleted
 *       404:
 *         description: The product was not found
 *       500:
 *         description: Some server error
 */
router.route('/:id').delete(deleteProduct);
