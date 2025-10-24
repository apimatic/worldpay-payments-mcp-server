
# Device Data Required Action List

## Structure

`DeviceDataRequiredActionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `supply3dsDeviceData` | [`PaymentsActionSupply3dsDeviceData \| undefined`](../../doc/models/payments-action-supply-3-ds-device-data.md) | Optional | Supply the 3DS device data collectionReference (SessionId) to continue the payment. See [details](../3ds-actions/supply3dsdevicedata) including what to add in the request body. |

## Example (as JSON)

```json
{
  "supply3dsDeviceData": {
    "href": "href8",
    "method": "method0"
  }
}
```

