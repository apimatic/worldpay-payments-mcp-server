
# Installment Plan

Required only for `latinAmerica` installment type. Not allowed for `merchant` installment type.

*This model accepts additional fields of type unknown.*

## Structure

`InstallmentPlan`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numberOfInstallments` | `number` | Required | Number of installments that the requested amount should be broken into. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "numberOfInstallments": 252,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

