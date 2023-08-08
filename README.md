# ArtiFatto Decentralized Voting Application

Welcome to my innovative decentralized voting application that harnesses the power of blockchain and ReactJS!

## Introduction

This repository hosts a demo application that demonstrates the implementation of a voting system using a Solidity smart contract and ReactJS frontend. The application utilizes blockchain technology to ensure transparent and tamper-proof voting processes.

## Installation and Usage

Follow these steps to get the application up and running:

1. **Clone the Repository:**
   - Clone this repository to your local machine using the following command:
     ```shell
     git clone https://github.com:shahzaibjanjua25/DAPP-Voting-Machine.git
     ```

2. **Install Dependencies:**
   - Navigate to the project folder and install the required packages using:
     ```shell
     npm install
     ```

3. **Compile and Deploy the Smart Contract:**
   - Compile and deploy the Solidity smart contract using Hardhat. Run the following commands:
     ```shell
     npx hardhat compile
     npx hardhat run --network volta scripts/deploy.js
     ```

4. **Configure Environment Variables:**
   - Copy the contract address obtained from deployment and paste it into the `.env` file.

5. **Blockchain Endpoint (Optional):**
   - Modify the `hardhat-config.js` file to change the blockchain endpoint, if desired.

6. **Prepare Your Private Key:**
   - Have your private key ready for interaction with the blockchain.

7. **Launch the Application:**
   - Start the application with the following command:
     ```shell
     npm start
     ```

## Contributing

If you're interested in contributing to this project, feel free to submit pull requests or raise issues. Your feedback and enhancements are highly appreciated!

## Get Involved

Connect with me to discuss ideas, suggestions, or improvements. Let's make this voting application even more amazing together!

## License

This project is licensed under the [MIT License](LICENSE).
