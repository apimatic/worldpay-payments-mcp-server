
# Validation Error Response Error

*This model accepts additional fields of type unknown.*

## Structure

`ValidationErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorName` | `string \| undefined` | Optional | - |
| `message` | `string \| undefined` | Optional | - |
| `jsonPath` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "errorName": "errorName6",
  "message": "message4",
  "jsonPath": "jsonPath8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

