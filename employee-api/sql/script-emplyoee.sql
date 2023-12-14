CREATE TABLE employee(
	employee_id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	job_role VARCHAR(255) NOT NULL,
	salary DECIMAL(10, 2),
	birth DATE NOT NULL,
	employee_registration INTEGER NOT NULL
)
