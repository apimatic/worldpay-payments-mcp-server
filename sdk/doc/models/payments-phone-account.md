
# Payments Phone Account

## Structure

`PaymentsPhoneAccount`

## Inherits From

[`PaymentsRecipientAccount`](../../doc/models/payments-recipient-account.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneNumber` | `string` | Required | Recipient's phone number.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `20`, *Pattern*: `^(?!\s*$)[0-9\s()+\-/.x]*$` |

## Example (as JSON)

```json
{
  "type": "phone",
  "phoneNumber": "phoneNumber6"
}
```

