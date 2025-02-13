# Code Review AI

Code Review AI is an intelligent tool designed to assist developers by providing automated code reviews using AI-powered insights. Built using **React** for the frontend and **Gemini AI** for the review and analysis of code, this project aims to streamline the process of peer reviews, making them faster, more efficient, and consistent.

## Features

- **Automated Code Review**: The AI inspects the submitted code and provides feedback on best practices, potential bugs, optimizations, and style suggestions.
- **Integration with GitHub**: Sync your GitHub repositories to automatically analyze and review code commits.
- **Detailed Feedback**: Get in-depth explanations and suggestions on code improvements.
- **User-Friendly Interface**: Built using React to ensure smooth navigation and responsiveness.
- **Customizable Rules**: Adjust review parameters and rules to match your team's coding standards.

## Installation

### Prerequisites

Before you begin, ensure that you have the following installed on your system:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **React** (for frontend)
- **Gemini AI** (for code analysis)

### Getting Started

1. Clone the repository:

    ```bash
   [ git clone https://github.com/yourusername/code-review-ai.git](https://github.com/UmayerCoding1/code-review-ai.git)
    
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create an `.env` file in the root of the project and configure your Gemini AI API key:

    ```bash
    REACT_APP_GEMINI_API_KEY=your_api_key_here
    ```

4. Run the app in development mode:

    ```bash
    npm start
    ```

    This will start the app on `http://localhost:3000`.

## Usage

- **Step 1**: Upload or link your code repository (GitHub or GitLab).
- **Step 2**: Select the file or commit you want to analyze.
- **Step 3**: The AI will analyze your code and display suggestions and improvements.
- **Step 4**: Review the feedback and make the necessary changes.

## Technologies Used

- **Frontend**: React, Axios (for API calls), Prism.js, React markdown, React simple code editor, Rehype highlight
- **Backend**: @google/generative-ai (code review engine), Cors, Dotenv, Nodemon
- **Version Control**: Git






