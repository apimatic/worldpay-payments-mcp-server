
# Payments Partial Settle Request

## Structure

`PaymentsPartialSettleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reference` | [`ReferenceEnum`](../../doc/models/reference-enum.md) | Required | - |
| `sequence` | [`PaymentsSequence \| undefined`](../../doc/models/payments-sequence.md) | Optional | The sequence number and total number of expected partial settlement requests for the payment. |
| `value` | [`Value`](../../doc/models/value.md) | Required | - |

## Example (as JSON)

```json
{
  "reference": "partial-settle-reference",
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

