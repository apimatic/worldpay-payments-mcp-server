
# Fraud High Risk Response

## Structure

`FraudHighRiskResponse`

## Inherits From

[`PaymentsResponse202`](../../doc/models/payments-response-202.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `score` | `number \| undefined` | Optional | Percentage assessment score for the transaction. Higher the value the greater the assessed risk. The outcome value is based on the thresholds configured using this score.<br><br>**Constraints**: `>= 0`, `<= 100` |
| `reason` | `string[] \| undefined` | Optional | Short description of the reason for the outcome. A reason can be returned for any 'outcome', even lowRisk. |

## Example (as JSON)

```json
{
  "outcome": "fraudHighRisk",
  "transactionReference": "transactionReference0",
  "score": 100.0,
  "reason": [
    "reason2"
  ]
}
```

