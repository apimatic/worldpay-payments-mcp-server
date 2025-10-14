
# Fraud High Risk Response

*This model accepts additional fields of type unknown.*

## Structure

`FraudHighRiskResponse`

## Inherits From

[`PaymentsResponse202`](../../doc/models/payments-response-202.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `score` | `number \| undefined` | Optional | Percentage assessment score for the transaction. Higher the value the greater the assessed risk. The outcome value is based on the thresholds configured using this score.<br><br>**Constraints**: `>= 0`, `<= 100` |
| `reason` | `string[] \| undefined` | Optional | Short description of the reason for the outcome. A reason can be returned for any 'outcome', even lowRisk. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "fraudHighRisk",
  "transactionReference": "transactionReference0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  },
  "score": 100.0,
  "reason": [
    "reason2"
  ]
}
```

