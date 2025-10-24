
# Device Data Required Response

## Structure

`DeviceDataRequiredResponse`

## Inherits From

[`PaymentsResponse202`](../../doc/models/payments-response-202.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceDataCollection` | [`DeviceDataCollection \| undefined`](../../doc/models/device-data-collection.md) | Optional | - |
| `actions` | [`DeviceDataRequiredActionList \| undefined`](../../doc/models/device-data-required-action-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "3dsDeviceDataRequired",
  "transactionReference": "transactionReference0",
  "deviceDataCollection": {
    "jwt": "jwt6",
    "url": "url0",
    "bin": "bin6"
  },
  "_actions": {
    "supply3dsDeviceData": {
      "href": "href8",
      "method": "method0"
    }
  }
}
```

