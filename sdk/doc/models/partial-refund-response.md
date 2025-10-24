
# Partial Refund Response

## Structure

`PartialRefundResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | [`OutcomeEnum \| undefined`](../../doc/models/outcome-enum.md) | Optional | - |
| `links` | [`PaymentsLink \| undefined`](../../doc/models/payments-link.md) | Optional | Return details about the status of the payment |
| `actions` | [`PartialRefundActionList \| undefined`](../../doc/models/partial-refund-action-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "authorized",
  "_links": {
    "self": {
      "href": "href0"
    }
  },
  "_actions": {
    "partiallyRefundPayment": {
      "href": "href6",
      "method": "method2"
    }
  }
}
```

