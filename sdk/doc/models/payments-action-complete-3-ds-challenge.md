
# Payments Action Complete 3 Ds Challenge

Resume the payment following the 3DS challenge being completed by the customer. See [details](../3ds-actions/complete3dschallenge)

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsActionComplete3DsChallenge`

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
  "href": "href2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

