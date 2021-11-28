# crypto-trading-bot-app

## Application Overview

This is an application that will place buy or sell orders to BTC-USD. User can set the price limit and volume and specify a buy or sell trade and place their order.
Once order is placed successfully, user can see their order status.

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

The app follows a MVC structure. The server API's are placed in server folder. 


## REST API

/order-status API expects the order_id as the payload, so /order-status?order_id="". The response will be a JSON object containing the order status. An example of the payload and response are listed below:

Payload:

order_id: df10289f-f4fa-4a93-a17e-0c0e71f4cac6

Response:

{
  id: 'df10289f-f4fa-4a93-a17e-0c0e71f4cac6',
  price: '22.00000000',
  size: '22.00000000',
  product_id: 'BTC-USD',
  profile_id: '9fc02697-1675-4ba6-b113-11280773ab5f',
  side: 'sell',
  type: 'limit',
  time_in_force: 'GTC',
  post_only: false,
  created_at: '2021-11-27T21:59:27.872614Z',
  fill_fees: '0.0000000000000000',
  filled_size: '0.00000000',
  executed_value: '0.0000000000000000',
  status: 'active',
  settled: false,
  stop: 'loss',
  stop_price: '1.00000000'
}

## Screenshots of Distinct Design Decisions

The App was designed to have the form fields in the center of the screen. The orders placed will be displayed inside a box underneath the form.

![alt text](https://github.com/aidapira/crypto-trading-bot-app/blob/master/trading_bot.PNG?raw=true)

When the user clicks on any order, an alert box will display their order status at the top of the page.

![alt text](https://github.com/aidapira/crypto-trading-bot-app/blob/master/order_status.PNG?raw=true)

