
# Header Error Response Error

*This model accepts additional fields of type unknown.*

## Structure

`HeaderErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorName` | `string \| undefined` | Optional | - |
| `message` | `string \| undefined` | Optional | - |
| `headerName` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "errorName": "errorName0",
  "message": "message0",
  "headerName": "headerName4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

