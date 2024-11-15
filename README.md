
ChargeWise: Electric Vehicle Cost Calculator and FAQ System

ChargeWise is an informative web platform that provides users with a comprehensive tool to calculate the cost of owning and operating an electric vehicle (EV) compared to a traditional fuel-powered vehicle. The platform also includes a dynamic FAQ section and a complaint submission form to enhance user experience.

 Features

- EV Cost Calculator: 
  - Calculate the total cost of running an electric vehicle (EV) versus a fuel-powered vehicle (petrol/diesel/hybrid).
  - Factors such as battery capacity, charging locations, vehicle range, journey distance, frequency, and domestic tariffs are considered in the calculation.

- **Electric Vehicle FAQ**:
  - Answer common questions related to electric vehicle usage, including charging time, range, battery life, and more.
  - Expandable FAQ section with toggle functionality for better user interaction.

- **Complaint Submission**:
  - A form that allows users to submit complaints or issues related to electric vehicles.

- **Responsive Design**:
  - The platform is built with mobile-first design principles, ensuring a smooth experience across all devices.

## Tech Stack

- **Frontend**:
  - HTML, CSS, JavaScript
  - Bootstrap for responsive design
  - EJS (Embedded JavaScript) templating engine

- **Backend**:
  - Node.js with Express.js
  - MongoDB for database management

- **Others**:
  - Body-parser for form data parsing
  - Nodemon for development server auto-reload

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- Node.js (v16 or higher)
- MongoDB instance (or use MongoDB Atlas for a cloud-based database)

### Steps

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/chargewise.git
   cd chargewise
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your MongoDB database (if using MongoDB Atlas, create a cluster and obtain the connection string).

4. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```bash
   MONGODB_URI=mongodb://localhost:27017/chargewise
   ```

5. Run the server:

   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:5000` to see the app in action.

## Usage

- Navigate to the **EV Cost Calculator** to start comparing costs between electric and conventional vehicles.
- Visit the **FAQ** section to learn more about electric vehicles and their benefits.
- Submit a complaint via the **Complaint Form** if you have any issues or feedback.

## Contributing

If you'd like to contribute to the project, feel free to fork the repository, make improvements, and submit pull requests. We welcome contributions for:

- Feature additions
- Bug fixes
- Enhancing the UI/UX

To contribute:

1. Fork the repo
2. Create a new branch (`git checkout -b feature-xyz`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add feature xyz'`)
5. Push to the branch (`git push origin feature-xyz`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **MongoDB**: For providing the database backend.
- **Bootstrap**: For offering a responsive design framework.
- **Express.js**: For a robust and simple web server framework.

---

Feel free to update the repository URL and any project-specific details as needed!
