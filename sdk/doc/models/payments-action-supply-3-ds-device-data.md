
# Payments Action Supply 3 Ds Device Data

Supply the 3DS device data collectionReference (SessionId) to continue the payment. See [details](../3ds-actions/supply3dsdevicedata) including what to add in the request body.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsActionSupply3DsDeviceData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `method` | `string \| undefined` | Optional | **Default**: `'POST'` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "method": "POST",
  "href": "href6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

