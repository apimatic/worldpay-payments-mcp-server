
# Payments Action Refund

Fully refund the payment. See [details](../payments-lifecycle/refund)

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsActionRefund`

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
  "href": "href8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

