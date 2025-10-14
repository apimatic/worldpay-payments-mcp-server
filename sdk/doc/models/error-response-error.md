
# Error Response Error

*This model accepts additional fields of type unknown.*

## Structure

`ErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorName` | `string \| undefined` | Optional | - |
| `message` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "errorName": "errorName2",
  "message": "message2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

