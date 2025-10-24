
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Test`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](../doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| basicAuthCredentials | [`BasicAuthCredentials`](auth/basic-authentication.md) | The credential object for basicAuth |

The API client can be initialized as follows:

```ts
import { Client, Environment } from 'paymentslib';

const client = new Client({
  basicAuthCredentials: {
    username: 'BasicAuthUserName',
    password: 'BasicAuthPassword'
  },
  timeout: 0,
  environment: Environment.Test,
});
```

