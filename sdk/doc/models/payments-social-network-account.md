
# Payments Social Network Account

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsSocialNetworkAccount`

## Inherits From

[`PaymentsRecipientAccount`](../../doc/models/payments-recipient-account.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialNetworkReference` | `string` | Required | A reference identifying recipient's social network account.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^(?!\s*$)[a-zA-Z0-9\s@!£*#$)(+\-_=.,/;:'"]*$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "socialNetwork",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  },
  "socialNetworkReference": "socialNetworkReference8"
}
```

