
# Payments Partial Refund Request

## Structure

`PaymentsPartialRefundRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reference` | `string` | Required | - |
| `value` | [`Value`](../../doc/models/value.md) | Required | - |

## Example (as JSON)

```json
{
  "reference": "reference8",
  "value": {
    "currency": "USD",
    "amount": 250
  }
}
```

