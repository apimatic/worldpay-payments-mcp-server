
# Payments Action Partial Refund

Partially refund the payment.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsActionPartialRefund`

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

