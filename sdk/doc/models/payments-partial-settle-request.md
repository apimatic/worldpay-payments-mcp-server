
# Payments Partial Settle Request

## Structure

`PaymentsPartialSettleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reference` | `string` | Required | - |
| `sequence` | [`PaymentsSequence \| undefined`](../../doc/models/payments-sequence.md) | Optional | The sequence number and total number of expected partial settlement requests for the payment. |
| `value` | [`Value`](../../doc/models/value.md) | Required | - |

## Example (as JSON)

```json
{
  "reference": "reference2",
  "value": {
    "currency": "USD",
    "amount": 250
  },
  "sequence": {
    "number": 170,
    "total": 22
  }
}
```

