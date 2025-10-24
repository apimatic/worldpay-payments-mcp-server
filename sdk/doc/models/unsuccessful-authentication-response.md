
# Unsuccessful Authentication Response

## Structure

`UnsuccessfulAuthenticationResponse`

## Inherits From

[`DeviceDataResponse201`](../../doc/models/device-data-response-201.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authentication` | [`Authentication \| undefined`](../../doc/models/authentication.md) | Optional | Object that contains authentication related information. |

## Example (as JSON)

```json
{
  "outcome": "3dsAuthenticationFailed",
  "transactionReference": "transactionReference8",
  "authentication": {
    "version": "version4",
    "type": "type2",
    "authenticationValue": "authenticationValue0",
    "eci": "eci8",
    "transactionId": "transactionId8"
  }
}
```

