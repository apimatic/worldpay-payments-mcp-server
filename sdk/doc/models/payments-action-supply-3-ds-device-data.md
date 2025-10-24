
# Payments Action Supply 3 Ds Device Data

Supply the 3DS device data collectionReference (SessionId) to continue the payment. See [details](../3ds-actions/supply3dsdevicedata) including what to add in the request body.

## Structure

`PaymentsActionSupply3dsDeviceData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `method` | `string \| undefined` | Optional | **Default**: `'POST'` |

## Example (as JSON)

```json
{
  "method": "POST",
  "href": "href6"
}
```

