DELETE FROM store
WHERE product_id = $1;
SELECT * FROM store;