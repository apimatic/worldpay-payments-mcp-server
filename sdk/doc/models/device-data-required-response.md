
# Device Data Required Response

*This model accepts additional fields of type unknown.*

## Structure

`DeviceDataRequiredResponse`

## Inherits From

[`PaymentsResponse202`](../../doc/models/payments-response-202.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deviceDataCollection` | [`DeviceDataCollection \| undefined`](../../doc/models/device-data-collection.md) | Optional | - |
| `actions` | [`DeviceDataRequiredActionList \| undefined`](../../doc/models/device-data-required-action-list.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "3dsDeviceDataRequired",
  "transactionReference": "transactionReference0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  },
  "deviceDataCollection": {
    "jwt": "jwt6",
    "url": "url0",
    "bin": "bin6",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "_actions": {
    "supply3dsDeviceData": {
      "href": "href8",
      "method": "method0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

