
# Payments Card Account

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsCardAccount`

## Inherits From

[`PaymentsRecipientAccount`](../../doc/models/payments-recipient-account.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumber` | `string` | Required | Recipient's card number.<br><br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `19` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "card",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  },
  "cardNumber": "cardNumber4"
}
```

