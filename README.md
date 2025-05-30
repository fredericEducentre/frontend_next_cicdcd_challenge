# Frontend - CI/CD Challenge

This is the frontend for the [CI/CD Challenge Backend](https://github.com/fredericEducentre/backend_symfony_cicdcd_challenge), built using modern web technologies. It communicates with the Symfony-based API linked above.

## Getting Started

Follow these steps to set up and deploy the frontend project.

### 1. Install Dependencies

Use npm to install all the required dependencies:

```bash
npm install
```

### 2. Build the Project

Compile the source code into production-ready static assets:

```bash
npm run build
```

This command generates a dist/ directory, which contains the optimized and minified HTML, CSS, and JavaScript files ready for deployment.

### 3. Deploy to Apache

To deploy the application:

    Copy the contents of the dist/ folder.

    Paste them into your Apache web server's root directory (e.g., /var/www/html on most Linux distributions).

Make sure your Apache server is properly configured to serve static files and route requests correctly if you're using a frontend router (e.g., Vue Router, React Router).
