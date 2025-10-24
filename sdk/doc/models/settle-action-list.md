
# Settle Action List

## Structure

`SettleActionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refundPayment` | [`PaymentsActionRefund \| undefined`](../../doc/models/payments-action-refund.md) | Optional | Fully refund the payment. See [details](../payments-lifecycle/refund) |
| `partiallyRefundPayment` | [`PaymentsActionPartialRefund \| undefined`](../../doc/models/payments-action-partial-refund.md) | Optional | Partially refund the payment. |

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
  }
}
```

