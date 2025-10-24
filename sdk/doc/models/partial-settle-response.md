
# Partial Settle Response

## Structure

`PartialSettleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | [`OutcomeEnum \| undefined`](../../doc/models/outcome-enum.md) | Optional | - |
| `links` | [`PaymentsLink \| undefined`](../../doc/models/payments-link.md) | Optional | Return details about the status of the payment |
| `actions` | [`PartialSettleActionList \| undefined`](../../doc/models/partial-settle-action-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "sentForRefund",
  "_links": {
    "self": {
      "href": "href0"
    }
  },
  "_actions": {
    "refundPayment": {
      "href": "href6",
      "method": "method2"
    },
    "partiallyRefundPayment": {
      "href": "href6",
      "method": "method2"
    },
    "partiallySettlePayment": {
      "href": "href8",
      "method": "method0"
    },
    "cancelPayment": {
      "href": "href4",
      "method": "method4"
    }
  }
}
```

