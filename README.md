# Budget_App
This app allows the user to input their personal transactions and track their total budget. Using IndexedDB, the budget tracker persists data even when the device is not online. When the device reconnects, any pending transactions are synced with the backend api. 

### Deployed Link

<img src="public/assets/images/BudgetApp.gif">  

## Table of Contents
1. [About this project](#about)
2. [Languages Used](#laguages)
3. [Installation](#install)
4. [Usage](#usage)
5. [Contributing](#contribute)
6. [Acknowledgements](#ack)

## About This Project <a name="about"></a>

> ### Business Context
>Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

This application runs on a local server. Whethere the app is online or offline, users are able to utilize the app functions, and the records to the database are saved as pending until reconnected to the network. 

Users are able to 
- Enter a transaction name and value. 
- Add or subtract the value in the ledger. 
- View a graphical interface summarizing their past spending habits. 


## Languages & Technologies Used :floppy_disk: <a name="laguages"></a>

Powered by:
- mongoose
- express

## Installation :wrench: <a name="install"></a>

`npm install`  

## Usage :computer: <a name="usage"></a>

`npm start`

## Contributing :v: <a name="contribute"></a>

Feel free to fork this repository, and open a pull request to suggest changes. 

## Acknowledgements <a name="ack"></a>

Rutgers Coding Bootcamp, 2020 :rocket: