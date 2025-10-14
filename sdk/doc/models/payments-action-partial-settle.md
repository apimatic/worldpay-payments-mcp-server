
# Payments Action Partial Settle

Partially settle the payment. See [details](../payments-lifecycle/partialsettle) including what to add in the request body.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsActionPartialSettle`

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
  "href": "href6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

