
# Settle Response

## Structure

`SettleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | [`OutcomeEnum \| undefined`](../../doc/models/outcome-enum.md) | Optional | - |
| `links` | [`PaymentsLink \| undefined`](../../doc/models/payments-link.md) | Optional | Return details about the status of the payment |
| `actions` | [`SettleActionList \| undefined`](../../doc/models/settle-action-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "sentForSettlement",
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
    }
  }
}
```

