
# Payments Recipient Account

An object for the account details of the recipient.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsRecipientAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "PaymentsRecipientAccount",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

