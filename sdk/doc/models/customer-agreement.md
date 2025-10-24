
# Customer Agreement

## Structure

`CustomerAgreement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type4Enum \| undefined`](../../doc/models/type-4-enum.md) | Optional | - |
| `storedCardUsage` | [`StoredCardUsageEnum \| undefined`](../../doc/models/stored-card-usage-enum.md) | Optional | Set to `first` to store a card or `subsequent` to use a previously stored card. |
| `installmentType` | [`InstallmentTypeEnum \| undefined`](../../doc/models/installment-type-enum.md) | Optional | Defines the type of installments service.<br><br>Read more on how to set up [__Latin America Installments__](/products/payments/enable-features/latam-installments) under our guide. |
| `installmentPlan` | [`InstallmentPlan \| undefined`](../../doc/models/installment-plan.md) | Optional | Required only for `latinAmerica` installment type. Not allowed for `merchant` installment type. |
| `schemeReference` | `string \| undefined` | Optional | Optional field available only for `subsequent` storedCardUsage. Unique reference provided by card schemes used to link the `first` and `subsequent` payments. If a Worldpay token was created as part of the first payment, this value is bundled with the token and does not need to be provided again. If you manage multiple agreements for a single cardholder using a token, please use the `schemeReference` returned to you. This allows you to distinguish and manage each separate agreement appropriately.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `56`, *Pattern*: `^[A-Za-z0-9]*$` |

## Example (as JSON)

```json
{
  "schemeReference": "MCCOLXT1C0104",
  "type": "cardOnFile",
  "storedCardUsage": "first",
  "installmentType": "merchant",
  "installmentPlan": {
    "numberOfInstallments": 36
  }
}
```

