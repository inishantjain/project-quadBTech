--@block
CREATE TABLE IF NOT EXISTS test (
    name VARCHAR(255) NOT NULL
);

--@BLOCK
INSERT INTO test (name) VALUES('dANGER');

--@block 
SELECT * FROM test;

--@block
DROP TABLE crypto_tickers;