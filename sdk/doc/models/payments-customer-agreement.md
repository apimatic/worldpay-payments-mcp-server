
# Payments Customer Agreement

Contains specific customer agreements for the transaction.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsCustomerAgreement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "PaymentsCustomerAgreement",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

