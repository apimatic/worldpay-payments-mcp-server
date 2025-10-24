
# Payments Email Account

## Structure

`PaymentsEmailAccount`

## Inherits From

[`PaymentsRecipientAccount`](../../doc/models/payments-recipient-account.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailAddress` | `string` | Required | Recipient's email address.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128`, *Pattern*: `^.+@.+$` |

## Example (as JSON)

```json
{
  "type": "email",
  "emailAddress": "emailAddress6"
}
```

