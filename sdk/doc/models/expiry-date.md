
# Expiry Date

Contains your customer's card or token expiry date.

*This model accepts additional fields of type unknown.*

## Structure

`ExpiryDate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `year` | `number` | Required | - |
| `month` | `number` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "year": 2028,
  "month": 6,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

