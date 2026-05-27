-- =========================
-- USERS DATA
-- =========================

INSERT INTO users (username, password, role)
VALUES ('admin', 'admin@123', 'ADMIN');

INSERT INTO users (username, password, role)
VALUES ('Deepanshu Kaushik', 'Deepanshu@123', 'GENERAL_USER');

INSERT INTO users (username, password, role)
VALUES ('Tanmay Gupta', 'Tanmay@123', 'GENERAL_USER');

INSERT INTO users (username, password, role)
VALUES ('Alexandra Daddario', 'Alexandra@123', 'GENERAL_USER');

INSERT INTO users (username, password, role)
VALUES ('Tammnah Bhatiya', 'Tammnah@123', 'GENERAL_USER');



-- =========================
-- RECORDS DATA
-- =========================

INSERT INTO Records (resource_name, access_level, user_id)
VALUES ('Employee Dashboard', 'READ', 1);

INSERT INTO Records (resource_name, access_level, user_id)
VALUES ('Payroll System', 'WRITE', 1);

INSERT INTO Records (resource_name, access_level, user_id)
VALUES ('Project Reports', 'READ', 2);

INSERT INTO Records (resource_name, access_level, user_id)
VALUES ('Finance Dashboard', 'WRITE', '2');

INSERT INTO Records (resource_name, access_level, user_id)
VALUES ('HR Management', 'READ', '3');

INSERT INTO Records (resource_name, access_level, user_id)
VALUES ('Inventory Control', 'WRITE', '4');

INSERT INTO Records (resource_name, access_level, user_id)
VALUES ('Customer Analytics', 'READ', '5');