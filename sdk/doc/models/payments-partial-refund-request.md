
# Payments Partial Refund Request

## Structure

`PaymentsPartialRefundRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reference` | [`Reference1Enum`](../../doc/models/reference-1-enum.md) | Required | - |
| `value` | [`Value`](../../doc/models/value.md) | Required | - |

## Example (as JSON)

```json
{
  "reference": "partial-refund-reference",
  "value": {
    "currency": "USD",
    "amount": 250
  }
}
```

