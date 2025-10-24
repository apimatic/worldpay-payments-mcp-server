
# Fraud

Details of the outcome of the Fraud assessment

*This model accepts additional fields of type unknown.*

## Structure

`Fraud`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | [`Outcome6 \| undefined`](../../doc/models/outcome-6.md) | Optional | outcome of the fraud assessment. `highRisk` outcomes stop the transaction before payment. |
| `score` | `number \| undefined` | Optional | The score calculated by the fraud assessment, set score thresholds are used to define lowRisk, highRisk and review outcomes |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "score": 44.0,
  "outcome": "review",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

