# crypto-trading-bot-app

## Application Overview

This application is a trading bot that will place buy or sell orders to BTC-USD when a target price is reached. User can set the target price and volume and specify a buy or sell trade. The bot will place orders every minute when BTC-USD price is less than target buy or greater than target sell prices.

## Getting Started

Download links:

SSH clone URL: git@github.com:aidapira/crypto-trading-bot-app.git

HTTPS clone URL: https://github.com/aidapira/crypto-trading-bot-app.git

## To start the app

1. In project folder and client folder, run:
```
npm install
```
or
``` 
yarn
```

2. To start the Nodejs server, and the react app; in project folder and client folder, run:

```
npm start
```
or
``` 
yarn start
```

## App architecture pattern

The app follows an MVC structure. The server API's are placed in server folder. 

In the views folder, there are 6 class components. There are 2 reusable class components which are the InputField and SelectField componenet. The input field is used twice, shown below:

![alt text](https://github.com/aidapira/crypto-trading-bot-app/blob/master/input_field.PNG?raw=true)

The select field is used once, shown below:

![alt text](https://github.com/aidapira/crypto-trading-bot-app/blob/master/select_field.PNG?raw=true)

Both input field and select fields are included in TradingForm component. 

![alt text](https://github.com/aidapira/crypto-trading-bot-app/blob/master/trading_form.PNG?raw=true)

The user flow goes as follows:

User inputs limit price, volume, and transaction type. On click of SET TARGET PRICE, the data will be sent to the setTargetPrice.ts controller which will call the /set-target-price API which will run CRUD operations save the target price into the MongoDB database.

The LandingPage component fetches the target prices from the backend, then passes it to ListTargetPrices component which will render the data.

![alt text](https://github.com/aidapira/crypto-trading-bot-app/blob/master/target_price_box.PNG?raw=true)

The LandingPage component also fetches the placed orders and renders them in ListOrders component.

![alt text](https://github.com/aidapira/crypto-trading-bot-app/blob/master/order_placed_box.PNG?raw=true)

The LandingPage component places the TradingForm, the ListTargetPrices, and the ListOrders component on the page.

![alt text](https://github.com/aidapira/crypto-trading-bot-app/blob/master/trading_bot.PNG?raw=true)

The LandingPage component also runs the placeOrder function every minute. The placeOrder function gets the target prices as an input, gets the BTC-USD current prices from Coinbase API and compares the target prices with the current BTC-USD prices and places orders based on a logic that compares the prices. Once an order is placed, the target price that was filled will be removed from the database.

Lastly, the CSS files for the application are placed inside content folder and imported to corresponsing views files.

## REST API

//set-target-price API expects the price_limit, volume, and type as the payload. This API will run CRUD operations to save the data in the database. The response will be a JSON object that says that a new target price was saved. An example of the payload and response are listed below:

Payload:

```
{
  price_limit: "1"
  type: "sell"
  volume: "1"
}
```

Response:

```
"New Target Price saved successfully."
```

## Screenshots of Distinct Design Decisions

The App was designed to have the form fields in the center of the screen. The target prices and orders placed will be displayed inside a box underneath the form.

![alt text](https://github.com/aidapira/crypto-trading-bot-app/blob/master/trading_bot.PNG?raw=true)

## URL of the Hosted Application

```
https://crypto-trading-bot-app.herokuapp.com/
```
