
# Cancel Response

## Structure

`CancelResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | [`OutcomeEnum \| undefined`](../../doc/models/outcome-enum.md) | Optional | - |
| `links` | [`PaymentsLink \| undefined`](../../doc/models/payments-link.md) | Optional | Return details about the status of the payment |

## Example (as JSON)

```json
{
  "outcome": "fraudHighRisk",
  "_links": {
    "self": {
      "href": "href0"
    }
  }
}
```

