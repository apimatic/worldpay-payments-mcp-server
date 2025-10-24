
# Payments Recipient Address

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsRecipientAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postalCode` | `string \| undefined` | Optional | The postal code of the recipient. Relevant only in the UK.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10`, *Pattern*: `^[A-Za-z0-9 ]*$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "postalCode": "postalCode2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

