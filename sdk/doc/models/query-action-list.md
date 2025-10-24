
# Query Action List

## Structure

`QueryActionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cancelPayment` | [`PaymentsActionCancel \| undefined`](../../doc/models/payments-action-cancel.md) | Optional | Cancel the payment. See [details](../payments-lifecycle/cancel) |
| `partiallySettlePayment` | [`PaymentsActionPartialSettle \| undefined`](../../doc/models/payments-action-partial-settle.md) | Optional | Partially settle the payment. See [details](../payments-lifecycle/partialsettle) including what to add in the request body. |
| `settlePayment` | [`PaymentsActionSettle \| undefined`](../../doc/models/payments-action-settle.md) | Optional | Fully settle the payment. See [details](../payments-lifecycle/settle) |
| `refundPayment` | [`PaymentsActionRefund \| undefined`](../../doc/models/payments-action-refund.md) | Optional | Fully refund the payment. See [details](../payments-lifecycle/refund) |
| `partiallyRefundPayment` | [`PaymentsActionPartialRefund \| undefined`](../../doc/models/payments-action-partial-refund.md) | Optional | Partially refund the payment. |

## Example (as JSON)

```json
{
  "cancelPayment": {
    "href": "href4",
    "method": "method4"
  },
  "partiallySettlePayment": {
    "href": "href8",
    "method": "method0"
  },
  "settlePayment": {
    "href": "href4",
    "method": "method4"
  },
  "refundPayment": {
    "href": "href6",
    "method": "method2"
  },
  "partiallyRefundPayment": {
    "href": "href6",
    "method": "method2"
  }
}
```

