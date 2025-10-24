
# Payments Social Network Account

## Structure

`PaymentsSocialNetworkAccount`

## Inherits From

[`PaymentsRecipientAccount`](../../doc/models/payments-recipient-account.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialNetworkReference` | `string` | Required | A reference identifying recipient's social network account.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s@!£*#$)(+\-_=.,/;:'"]*$` |

## Example (as JSON)

```json
{
  "type": "socialNetwork",
  "socialNetworkReference": "socialNetworkReference8"
}
```

