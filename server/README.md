# PaymentsLib MCP Server

Use a single API that orchestrates the payment flow to include FraudSight, 3DS and Token creation.

__Authentication__

Set your headers 

```   
Authorization: {your_credentials}    
Content-Type: application/json    
WP-Api-Version: 2024-06-01
```    

Replace `{your_credentials}` with your base64-encoded Basic Auth username and password.  

__DNS whitelisting__

Whitelist the following URLs:    
* `https://try.access.worldpay.com/`
* `https://access.worldpay.com/`

Please ensure you use DNS whitelisting, not explicit IP whitelisting. When you make a request within Access Worldpay, you should always cache the response returned. 

__API collection__

A full set of API examples based on different scenarios. 

 * __[Download Postman collection](./collections/index.md)__


## Quick Start

To run the MCP server using `node`, use the following command:

```bash
cd server
node ./cli.js
```

Flags:
-  `--port <number>`, `-p` : Port to run the http server on
-  `--transport <string>`, `-t` : Transport (`http` | `stdio`)
-  `--toolsets <items>` : Comma-separated list of toolsets. By default, all toolsets are included.

## Installation Guide

### Prerequisites
Before you begin, ensure the following requirements are met:

- **Node.js**: Version **22** or higher  
  Check your version:
  ```bash
  node --version
  ```
- **MCP-Compatible Host**: A tool that supports MCP servers (remote or local `stdio`):
    - **VS Code** 1.101+
    - **Claude Desktop**
    - **Cursor**

### Setup in Claude Desktop / Cursor

**Tutorials**

- [Claude Desktop MCP Setup Guide](https://modelcontextprotocol.io/quickstart/user)
- [Cursor MCP Setup Guide](https://cursor.com/docs/context/mcp)

After following the setup guides, add the MCP server configuration to your configuration file.

You need to fill in the parts that look `[LIKE-THIS]`.

**Example Configuration** (`claude_desktop_config.json`/`mcp.json`):
```json
{
  "mcpServers": {
    "paymentslib-mcp-server": {
      "command": "node",
      "args": [
         "[YOUR-PATH-HERE]/server/server/cli.js",
        "--transport",
        "stdio"
      ],
    "env": {
        "PAYMENTS_LIB_BASIC_AUTH_USER_NAME": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "PAYMENTS_LIB_BASIC_AUTH_PASSWORD": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]"
      }
    }
  }
}
```

### Setup in VS Code

You can also configure the MCP server in VS Code. The setup is similar to Claude Desktop. See [the official docs](https://code.visualstudio.com/docs/copilot/chat/mcp-servers#_add-an-mcp-server-to-your-user-settings) for details.

**Example Configuration** (`settings.json`)
```json
{
  "servers": {
    "paymentslib-mcp-server": {
      "type": "stdio",
      "command": "node",
      "args": [
         "[YOUR-PATH-HERE]/server/server/cli.js",
        "--transport",
        "stdio"
      ],
    "env": {
        "PAYMENTS_LIB_BASIC_AUTH_USER_NAME": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]",
        "PAYMENTS_LIB_BASIC_AUTH_PASSWORD": "[YOUR-ENVIRONMENT-VARIABLE-VALUE-HERE]"
      }
    }
  }
}
```


## Environment Variables

The MCP server uses the following environment variables:

- `PAYMENTS_LIB_ENVIRONMENT`: Optional environment variable that must be one of the allowed enum values (Test, Live). Default: `Test`.
- `PAYMENTS_LIB_TIMEOUT`: Timeout for API calls. Optional number variable. Default: `30000`.

- **Authentication Variables**
 The Mcp server uses the following authentication environment variables
  - `PAYMENTS_LIB_BASIC_AUTH_USER_NAME`
  - `PAYMENTS_LIB_BASIC_AUTH_PASSWORD`

## Available Toolsets

- **Payment**
- **3DS Actions**
- **Manage Payments**
