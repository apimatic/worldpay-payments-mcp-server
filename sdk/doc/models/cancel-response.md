
# Cancel Response

*This model accepts additional fields of type unknown.*

## Structure

`CancelResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | [`Outcome \| undefined`](../../doc/models/outcome.md) | Optional | - |
| `links` | [`PaymentsLink \| undefined`](../../doc/models/payments-link.md) | Optional | Return details about the status of the payment |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "fraudHighRisk",
  "_links": {
    "self": {
      "href": "href0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

