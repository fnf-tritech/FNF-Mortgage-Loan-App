const { EmailClient } = require("@azure/communication-email");
require("dotenv").config();

// This code demonstrates how to fetch your connection string
// from an environment variable.
const connectionString = process.env['COMMUNICATION_SERVICES_CONNECTION_STRING'];
const emailClient = new EmailClient(connectionString);