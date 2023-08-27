INSERT INTO departments (
    deptartment_name
) VALUES ('sales', 'support', 'marketing', 'orders');

INSERT INTO roles (
    title, salary, department_id
) VALUES
('Sales Manager', 75,000, 1),
('Support Manger', 74,000, 2),
('Marketing Manager', 72,000, 3),
('Orders Manager', 75,000, 4),
('Sales Agent', 45,000, 1),
('IT Technician', 42,000, 2),
('Orders Supervisor', 42,000, 4);

INSERT INTO employees (
   first_name, last_name, role_id, manager_id
) VALUES 
('Andy','Hoerl', 1, null),
('Pat','McInery',1, 5, 1)
('Joan', 'Preston', 4, null),
('Rachel', 'Mathwig', 3, null),
('Chris', 'Cooker', 2, null),
('Adam', 'Cooker', 6, 6),
('Kelsey', 'Eberly', 7, 3);

