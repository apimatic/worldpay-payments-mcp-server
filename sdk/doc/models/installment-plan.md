
# Installment Plan

Required only for `latinAmerica` installment type. Not allowed for `merchant` installment type.

## Structure

`InstallmentPlan`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numberOfInstallments` | `number` | Required | Number of installments that the requested amount should be broken into. |

## Example (as JSON)

```json
{
  "numberOfInstallments": 252
}
```

