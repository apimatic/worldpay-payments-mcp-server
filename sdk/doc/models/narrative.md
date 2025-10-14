
# Narrative

The text that appears on your customer's statement. Used to identify the merchant.

*This model accepts additional fields of type unknown.*

## Structure

`Narrative`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `line1` | `string` | Required | line1 is used to provide basic details about the merchant.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[a-zA-Z0-9 ,./-]*$` |
| `line2` | `string \| undefined` | Optional | line2 is used for additional context about the payment or merchant. E.g. Order number or Merchant phone number.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `24`, *Pattern*: `^[a-zA-Z0-9 ,./-]*$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "line1": "line12",
  "line2": "line24",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

