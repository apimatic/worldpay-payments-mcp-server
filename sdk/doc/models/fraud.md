
# Fraud

Details of the outcome of the Fraud assessment

## Structure

`Fraud`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | [`Outcome6Enum \| undefined`](../../doc/models/outcome-6-enum.md) | Optional | outcome of the fraud assessment. `highRisk` outcomes stop the transaction before payment. |
| `score` | `number \| undefined` | Optional | The score calculated by the fraud assessment, set score thresholds are used to define lowRisk, highRisk and review outcomes |

## Example (as JSON)

```json
{
  "score": 44.0,
  "outcome": "review"
}
```

