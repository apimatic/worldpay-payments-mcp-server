
# Authorization Action List

## Structure

`AuthorizationActionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cancelPayment` | [`PaymentsActionCancel \| undefined`](../../doc/models/payments-action-cancel.md) | Optional | Cancel the payment. See [details](../payments-lifecycle/cancel) |
| `settlePayment` | [`PaymentsActionSettle \| undefined`](../../doc/models/payments-action-settle.md) | Optional | Fully settle the payment. See [details](../payments-lifecycle/settle) |
| `partiallySettlePayment` | [`PaymentsActionPartialSettle \| undefined`](../../doc/models/payments-action-partial-settle.md) | Optional | Partially settle the payment. See [details](../payments-lifecycle/partialsettle) including what to add in the request body. |

## Example (as JSON)

```json
{
  "cancelPayment": {
    "href": "href4",
    "method": "method4"
  },
  "settlePayment": {
    "href": "href4",
    "method": "method4"
  },
  "partiallySettlePayment": {
    "href": "href8",
    "method": "method0"
  }
}
```

