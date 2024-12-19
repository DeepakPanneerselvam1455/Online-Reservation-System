# Online Reservation System - README

## Project Overview

The **Online Reservation System** is a web application that allows users to make, view, and manage reservations. The system is built using **HTML, CSS, JavaScript**, **Node.js**, and **MySQL**. It consists of a frontend interface where users can input reservation details, and a backend to process and store the information.

The system ensures that users can reserve seats by filling out a form, which gets stored in the MySQL database, and the server confirms the reservation.

## Features

- **Frontend:**
  - Simple and responsive form to gather user information (name, email, phone number, date, time, and number of seats).
  - Displays a confirmation message after a successful reservation.
  
- **Backend:**
  - Node.js with Express.js to handle HTTP requests.
  - MySQL database to store reservation details.
  
- **Database:**
  - MySQL is used to store reservation data, including the user's details, reservation date, time, number of seats, and status (pending/confirmed/cancelled).

## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  
- **Backend:**
  - Node.js
  - Express.js
  - MySQL
  
- **Database:**
  - MySQL

## Installation Guide

### Prerequisites

- **Node.js** and **npm** installed on your system.
- **MySQL** installed and running.

### Steps to Set Up

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/DeepakPanneerselvam1455/OnlineReservationSystem.git
   ```

2. **Install Node.js Dependencies:**

   Inside the project folder, run:

   ```bash
   npm init -y
   npm install express mysql2 body-parser
   ```

3. **Set Up MySQL Database:**

   Log in to MySQL and create the database and table to store reservation data:

   ```sql
   CREATE DATABASE reservation_system;
   USE reservation_system;

   CREATE TABLE reservations (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL,
       phone VARCHAR(20) NOT NULL,
       date DATE NOT NULL,
       time TIME NOT NULL,
       seats INT NOT NULL,
       status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending'
   );
   ```

4. **Configure MySQL Connection:**

   In the `server.js` file, ensure that the MySQL connection details (`user`, `password`, and `database`) match your local MySQL setup.

5. **Run the Backend:**

   Start the server by running:

   ```bash
   node server.js
   ```

   The server will start on `http://localhost:3000`.

6. **Access the Application:**

   Open a browser and go to `http://localhost:3000` to access the reservation form.

### Project Structure

```
- reservation_system/
    - public/
        - index.html
        - styles.css
        - script.js
    - server.js
```

### Example Usage

1. **Making a Reservation:**

   - Go to the reservation form on `http://localhost:3000`.
   - Fill in the required details and click "Reserve".
   - The system will send the data to the backend, which will store the reservation in the database.

2. **Viewing Reservations:**

   - The system currently stores reservations in the MySQL database. You can query the `reservations` table to view all reservations.
   
   - You can add a new route in the backend to list reservations, such as:

   ```javascript
   // Route to fetch all reservations
   app.get('/reservations', (req, res) => {
     const query = 'SELECT * FROM reservations';
     db.query(query, (err, results) => {
       if (err) throw err;
       res.json(results);
     });
   });
   ```

### Additional Features (Future Improvements)

- **User Authentication**: Implement login and signup functionalities for users to manage their reservations securely.
- **Reservation Management**: Allow users to view, cancel, or modify their existing reservations.
- **Payment Integration**: Add payment options for paid reservations.
- **Admin Panel**: Admins can view, approve, or cancel reservations.

## Author

- **Author**: [Deepak P](https://github.com/DeepakPanneerselvam1455)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or contributions, feel free to open an issue or contact the project maintainer.

- **Contact**: [Deepak P](https://github.com/DeepakPanneerselvam1455)
