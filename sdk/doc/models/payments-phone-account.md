
# Payments Phone Account

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsPhoneAccount`

## Inherits From

[`PaymentsRecipientAccount`](../../doc/models/payments-recipient-account.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `phoneNumber` | `string` | Required | Recipient's phone number.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `20`, *Pattern*: `^(?!\s*$)[0-9\s()+\-/.x]*$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "phone",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  },
  "phoneNumber": "phoneNumber6"
}
```

