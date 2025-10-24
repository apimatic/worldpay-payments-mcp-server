
# Unsuccessful Authentication Response

*This model accepts additional fields of type unknown.*

## Structure

`UnsuccessfulAuthenticationResponse`

## Inherits From

[`DeviceDataResponse201`](../../doc/models/device-data-response-201.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authentication` | [`Authentication \| undefined`](../../doc/models/authentication.md) | Optional | Object that contains authentication related information. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "3dsAuthenticationFailed",
  "transactionReference": "transactionReference8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  },
  "authentication": {
    "version": "version4",
    "type": "type2",
    "authenticationValue": "authenticationValue0",
    "eci": "eci8",
    "transactionId": "transactionId8",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

