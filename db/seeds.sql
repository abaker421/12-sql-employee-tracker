INSERT INTO departments (
    name
) VALUES 
('Sales'), 
('Support'), 
('Marketing'), 
('Orders');

INSERT INTO roles (
    title, salary, department_id
) VALUES
('Sales Manager', 75000, 1),
('Support Manger', 74000, 2),
('Marketing Manager', 72000, 3),
('Orders Manager', 75000, 4),
('Sales Agent', 45000, 1),
('IT Technician', 42000, 2),
('Orders Supervisor', 42000, 4);

INSERT INTO employees (
   first_name, last_name, role_id, manager_id
) VALUES 
('Andy','Hoerl', 1, NULL),
('Pat','McInery',5, 1),
('Joan', 'Preston', 4, NULL),
('Rachel', 'Mathwig', 3, NULL),
('Chris', 'Cooker', 2, NULL),
('Adam', 'Cooker', 6, 6),
('Kelsey', 'Eberly', 7, 3);

