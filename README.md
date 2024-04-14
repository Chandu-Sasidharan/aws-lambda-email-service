## AWS Lambda Email Service

This repository contains a serverless application designed to process form submissions and send customized confirmation emails. It leverages [AWS Lambda](https://aws.amazon.com/lambda/), [API Gateway](https://aws.amazon.com/api-gateway/), and [Resend](https://resend.io) to manage form data and dispatch emails efficiently.

### Features
- **Serverless Framework**: Utilizes AWS Lambda for minimal server management.
- **Easy Integration**: Seamlessly integrates with any frontend capable of making HTTP requests.
- **Customization**: Allows for customized email responses based on user input from forms.

### Prerequisites
- An active AWS account. 
- [SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) for local testing.
- Docker for local function invocation through SAM CLI.

### Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Chandu-Sasidharan/aws-lambda-email-service.git
   cd aws-lambda-email-service
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create a Resend API Key**
- Sign up at [Resend](https://resend.io) and generate an API key. Verify your domain name to fully utilize the Resend API.

4. **Local Testing**
- Update event.json with your test data and run:

   ```bash
   sam local invoke "AWSLambdaEmailService" -e event.json
   ```

### Deployment

1. **Package the application**
   ```bash
   npm run zip
   ```

2. **Upload to AWS Lambda**
   - Navigate to the AWS Lambda console, create a new function, and upload the zip file.

3. **Set up AWS API Gateway**
   - Configure API Gateway as a trigger for the Lambda function.
   - Select REST API, enable CORS, and remember to deploy the API after every modifications.

### Usage

Send a POST request to the deployed API with the following JSON structure:

```json
{
  "user_name": "User Name",
  "user_email": "User Email",
  "message": "Message"
}
```

This will give you a starting point to implement a full-fledged email service for your app.

### Support

For more information, support, questions, or feedback, please reach out to me via email at [mail@chandu-sasidharan.de](mailto:mail@chandu-sasidharan.de).

