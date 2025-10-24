
# Partial Settle Action List

## Structure

`PartialSettleActionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refundPayment` | [`PaymentsActionRefund \| undefined`](../../doc/models/payments-action-refund.md) | Optional | Fully refund the payment. See [details](../payments-lifecycle/refund) |
| `partiallyRefundPayment` | [`PaymentsActionPartialRefund \| undefined`](../../doc/models/payments-action-partial-refund.md) | Optional | Partially refund the payment. |
| `partiallySettlePayment` | [`PaymentsActionPartialSettle \| undefined`](../../doc/models/payments-action-partial-settle.md) | Optional | Partially settle the payment. See [details](../payments-lifecycle/partialsettle) including what to add in the request body. |
| `cancelPayment` | [`PaymentsActionCancel \| undefined`](../../doc/models/payments-action-cancel.md) | Optional | Cancel the payment. See [details](../payments-lifecycle/cancel) |

## Example (as JSON)

```json
{
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
```

