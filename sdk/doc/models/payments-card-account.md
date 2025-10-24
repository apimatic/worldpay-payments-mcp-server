
# Payments Card Account

## Structure

`PaymentsCardAccount`

## Inherits From

[`PaymentsRecipientAccount`](../../doc/models/payments-recipient-account.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumber` | `string` | Required | Recipient's card number.<br><br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `19` |

## Example (as JSON)

```json
{
  "type": "card",
  "cardNumber": "cardNumber4"
}
```

