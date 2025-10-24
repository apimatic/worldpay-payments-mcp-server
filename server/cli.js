#!/usr/bin/env node
import { executeMcpServerCli } from "@apimatic/mcp-core";
import * as sdkMetadata from "paymentslib/metadata";

await executeMcpServerCli(
  sdkMetadata,
  {
  "name": "PaymentsLib MCP Server",
  "description": "Use a single API that orchestrates the payment flow to include FraudSight, 3DS and Token creation.  __Authentication__  Set your headers   ```    Authorization: {your_credentials}     Content-Type: application/json     WP-Api-Version: 2024-06-01 ```      Replace `{your_credentials}` with your base64-encoded Basic Auth username and password.    __DNS whitelisting__  Whitelist the following URLs:     * `https://try.access.worldpay.com/` * `https://access.worldpay.com/`  Please ensure you use DNS whitelisting, not explicit IP whitelisting. When you make a request within Access Worldpay, you should always cache the response returned.   __API collection__  A full set of API examples based on different scenarios.    * __[Download Postman collection](./collections/index.md)__"
  }
);