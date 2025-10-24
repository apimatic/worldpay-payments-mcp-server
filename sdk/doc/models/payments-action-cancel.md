
# Payments Action Cancel

Cancel the payment. See [details](../payments-lifecycle/cancel)

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsActionCancel`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `href` | `string \| undefined` | Optional | - |
| `method` | `string \| undefined` | Optional | **Default**: `'POST'` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "method": "POST",
  "href": "href4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

