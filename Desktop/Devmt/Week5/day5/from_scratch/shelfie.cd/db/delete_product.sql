DELETE FROM store
WHERE product_id = $2;
SELECT * FROM store;