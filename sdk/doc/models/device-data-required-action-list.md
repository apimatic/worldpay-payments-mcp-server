
# Device Data Required Action List

*This model accepts additional fields of type unknown.*

## Structure

`DeviceDataRequiredActionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supply3DsDeviceData` | [`PaymentsActionSupply3DsDeviceData \| undefined`](../../doc/models/payments-action-supply-3-ds-device-data.md) | Optional | Supply the 3DS device data collectionReference (SessionId) to continue the payment. See [details](../3ds-actions/supply3dsdevicedata) including what to add in the request body. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
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
```

