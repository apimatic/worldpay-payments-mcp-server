
# Payments Partial Refund Request

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsPartialRefundRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reference` | `string` | Required | - |
| `value` | [`Value`](../../doc/models/value.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "reference": "reference8",
  "value": {
    "currency": "USD",
    "amount": 250,
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

