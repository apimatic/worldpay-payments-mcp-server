
# Payments Card on File Customer Agreement

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsCardOnFileCustomerAgreement`

## Inherits From

[`PaymentsCustomerAgreement`](../../doc/models/payments-customer-agreement.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedCardUsage` | [`StoredCardUsage`](../../doc/models/stored-card-usage.md) | Required | Set to `first` to store a card or `subsequent` to use a previously stored card. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "cardOnFile",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  },
  "storedCardUsage": "first"
}
```

