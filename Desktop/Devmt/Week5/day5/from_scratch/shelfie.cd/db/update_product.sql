UPDATE store

SET price = $2

WHERE product_id = $1;

SELECT * FROM store;

