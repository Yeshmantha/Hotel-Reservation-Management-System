# Hotel Reservation Management System

The Hotel Reservation Management System aims to provide a seamless booking experience for users, while enabling efficient and effective hotel management. This system allows users to browse and book hotel rooms, while administrators can manage hotel information, update data, generate reports, and ensure smooth operation. Developed using MongoDB, Express, React.js, and Node.js, the system ensures that both administrators and customers have a user-friendly and secure platform.

### Key Features
- **Admin Management**
  - **Managing hotel information:** Ensure all hotel-related data is accurate and up-to-date.
  - **Updating new hotel information:** Add new rooms, services, and promotions.
  - **Deleting hotel information:** Remove obsolete data from the database.
  - **Report generation:** Generate reports on occupancy rates, earnings, and labor productivity.

- **Customer Management**
  - **Viewing hotel information:** Browse and compare hotels based on preferences and needs.
  - **Reserving hotels:** Make reservations and rate stays.

### Technologies Used
- **Backend -** Node.js with Express.js
- **Frontend -** React.js
- **Database -** MongoDB
- **API Testing -** Insomnia

## How to Install and Run the Project

### Prerequisites
- **Node.js** and **npm**
- **MongoDB**

### Backend (Node.js and Express.js)
1. Clone the repository:
    ```sh
    git clone https://github.com/it21223976/Hotel-Reservation-Management-System.git
    ```
2. Navigate to the backend directory:
    ```sh
    cd Hotel-Reservation-Management-System/api
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Create a `.env` file in the backend directory and add your MongoDB URI and other environment variables:
    ```sh
    MONGO_URI=your_mongodb_uri
    JWT=secret key
    ```
5. Start the backend server:
    ```sh
    npm start
    ```

### Frontend (React.js)
1. Navigate to the frontend directory:
    ```sh
    cd ../client
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the React application:
    ```sh
    npm start
    ```

### Admin Panel
1. Navigate to the frontend directory:
    ```sh
    cd ../admin
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the React application:
    ```sh
    npm start
    ```

## Tests

### Backend
1. Navigate to the backend directory:
    ```sh
    cd Hotel-Reservation-Management-System/api
    ```
2. Run the tests:
    ```sh
    npm test
    ```

### Frontend
1. Navigate to the frontend directory:
    ```sh
    cd ../client
    ```
2. Run the tests:
    ```sh
    npm test
    ```

### Admin Panel
1. Navigate to the frontend directory:
    ```sh
    cd ../admin
    ```
2. Run the tests:
    ```sh
    npm test
    ```

## How to Contribute to the Project

1. Fork the repository.
2. Create your feature branch:
    ```sh
    git checkout -b feature/YourFeature
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/YourFeature
    ```
5. Open a pull request.
