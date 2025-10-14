
# Payments Partial Settle Request

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsPartialSettleRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reference` | `string` | Required | - |
| `sequence` | [`PaymentsSequence \| undefined`](../../doc/models/payments-sequence.md) | Optional | The sequence number and total number of expected partial settlement requests for the payment. |
| `value` | [`Value`](../../doc/models/value.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "reference": "reference2",
  "value": {
    "currency": "USD",
    "amount": 250,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "sequence": {
    "number": 170,
    "total": 22,
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

