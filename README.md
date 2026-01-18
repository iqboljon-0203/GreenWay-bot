# GreenWay Telegram Bot 🌿

This is a minimal Telegram Bot that serves as an entry point for the **GreenWay** Telegram Web App.

## Features
- **Entry Point**: A simple `/start` command that welcomes users.
- **Minimalist**: Lightweight and fast, built with Node.js and Telegraf.

## Prerequisites
- [Node.js](https://nodejs.org/) (v12 or higher)
- A Telegram Bot Token (from [@BotFather](https://t.me/BotFather))

## Setup & Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Configuration**
    - Copy the example environment file:
      ```bash
      cp .env.example .env
      # Or on Windows Command Prompt:
      # copy .env.example .env
      ```
    - Open `.env` and replace `your_telegram_bot_token_here` with your actual Bot Token from BotFather.
    - (Optional) Update `WEBAPP_URL` if your web app is hosted elsewhere.

3.  **Run the Bot**
    ```bash
    npm start
    ```

## Usage
- Open your bot in Telegram.
- Send `/start`.

## Technical Details
- **Framework**: `telegraf`
- **Platform**: Node.js
