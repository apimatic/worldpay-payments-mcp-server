
# Payments Email Account

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsEmailAccount`

## Inherits From

[`PaymentsRecipientAccount`](../../doc/models/payments-recipient-account.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emailAddress` | `string` | Required | Recipient's email address.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128`, *Pattern*: `^.+@.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "email",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  },
  "emailAddress": "emailAddress6"
}
```

