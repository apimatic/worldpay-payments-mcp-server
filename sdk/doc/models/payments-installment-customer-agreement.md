
# Payments Installment Customer Agreement

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsInstallmentCustomerAgreement`

## Inherits From

[`PaymentsCustomerAgreement`](../../doc/models/payments-customer-agreement.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedCardUsage` | [`StoredCardUsage1 \| undefined`](../../doc/models/stored-card-usage-1.md) | Optional | Set to `first` to store a card or `subsequent` to use a previously stored card. Mandatory for `merchant` installment type. |
| `installmentType` | [`InstallmentType`](../../doc/models/installment-type.md) | Required | Defines the type of installments service.<br><br>Read more on how to set up [__Latin America Installments__](/products/payments/enable-features/latam-installments) under our guide. |
| `installmentPlan` | [`InstallmentPlan \| undefined`](../../doc/models/installment-plan.md) | Optional | Required only for `latinAmerica` installment type. Not allowed for `merchant` installment type. |
| `schemeReference` | `string \| undefined` | Optional | Optional field available only for `subsequent` storedCardUsage. Unique reference provided by card schemes used to link the `first` and `subsequent` payments. If a Worldpay token was created as part of the first payment, this value is bundled with the token and does not need to be provided again. If you manage multiple agreements for a single cardholder using a token, please use the `schemeReference` returned to you. This allows you to distinguish and manage each separate agreement appropriately.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `56`, *Pattern*: `^[A-Za-z0-9]*$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "installmentType": "merchant",
  "schemeReference": "MCCOLXT1C0104",
  "type": "installment",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  },
  "storedCardUsage": "first",
  "installmentPlan": {
    "numberOfInstallments": 36,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

