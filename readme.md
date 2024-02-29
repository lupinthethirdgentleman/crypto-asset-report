# Crypto Asset Report

Crypto Asset Report is a comprehensive cryptocurrency dashboard application that provides users with real-time data leveraging the [CoinMarketCap](https://coinmarketcap.com/api/documentation/v1/) and [TradingView](https://www.tradingview.com/) APIs.

## Features

- **Comprehensive Dashboard**: Provides a comprehensive overview of all cryptocurrencies, offering users a broad understanding at a glance.
- **Search Functionality**: Enables users to easily search for specific cryptocurrencies, enhancing accessibility and user experience.
- **Detailed Overview**: Allows users to access detailed information by clicking on a specific currency, providing a deeper understanding of each asset.
- **JWT Authentication with Authorization**: Implements JWT (JSON Web Token) authentication to secure user access and ensure authorized usage of the application's features.

## Prerequisites

Before running the application, ensure the following dependencies are installed on your local machine:

- Node.js (v20.10.0)
- Yarn (v1.22.21)

## API Keys

To utilize the application's features, you'll need to obtain and add your CoinMarketCap API key in the `.env` file.

## Installation

Follow these steps to install the application:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/lupinthethirdgentleman/crypto-asset-report.git
```

2. Navigate to the project directory.
3. Install the dependencies using Yarn:

```bash
yarn install
```

## Usage

To start the server and launch the application, run the following command:

```bash
yarn start
```

After running the app, please log in as an admin:

- Email: admin@materialize.com
- Password: admin

The application will start and be accessible via your local host.

## Built With

- [Next.js](https://nextjs.org/): Next.js is a React framework that enables functionality such as server-side rendering, static site generation, and routing, providing a robust foundation for building dynamic web applications.
- [Material-UI](https://mui.com/): Material-UI is a popular React UI framework utilized for styling the application. Known for its flexibility and extensive component library, Material-UI simplifies the process of creating visually appealing user interfaces.

## Contributing

Contributions via pull requests are welcome. Please ensure to open an issue first to discuss major changes or additions.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## Author

- [lupinthethirdgentleman](https://github.com/lupinthethirdgentleman)
