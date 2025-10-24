
# Payments Card on File Customer Agreement

## Structure

`PaymentsCardOnFileCustomerAgreement`

## Inherits From

[`PaymentsCustomerAgreement`](../../doc/models/payments-customer-agreement.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedCardUsage` | [`StoredCardUsageEnum`](../../doc/models/stored-card-usage-enum.md) | Required | Set to `first` to store a card or `subsequent` to use a previously stored card. |

## Example (as JSON)

```json
{
  "type": "cardOnFile",
  "storedCardUsage": "first"
}
```

