
# Payments Subscription Customer Agreement

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsSubscriptionCustomerAgreement`

## Inherits From

[`PaymentsCustomerAgreement`](../../doc/models/payments-customer-agreement.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedCardUsage` | [`StoredCardUsage`](../../doc/models/stored-card-usage.md) | Required | Set to `first` to store a card or `subsequent` to use a previously stored card. |
| `schemeReference` | `string \| undefined` | Optional | Optional field available only for `subsequent` storedCardUsage. Unique reference provided by card schemes used to link the `first` and `subsequent` payments. If a Worldpay token was created as part of the first payment, this value is bundled with the token and does not need to be provided again. If you manage multiple agreements for a single cardholder using a token, please use the `schemeReference` returned to you. This allows you to distinguish and manage each separate agreement appropriately.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `56`, *Pattern*: `^[A-Za-z0-9]*$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "storedCardUsage": "first",
  "schemeReference": "MCCOLXT1C0104",
  "type": "subscription",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

