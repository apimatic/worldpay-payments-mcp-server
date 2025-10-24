
# Sent for Settlement Action List

*This model accepts additional fields of type unknown.*

## Structure

`SentForSettlementActionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `refundPayment` | [`PaymentsActionRefund \| undefined`](../../doc/models/payments-action-refund.md) | Optional | Fully refund the payment. See [details](../payments-lifecycle/refund) |
| `partiallyRefundPayment` | [`PaymentsActionPartialRefund \| undefined`](../../doc/models/payments-action-partial-refund.md) | Optional | Partially refund the payment. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "refundPayment": {
    "href": "href6",
    "method": "method2",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "partiallyRefundPayment": {
    "href": "href6",
    "method": "method2",
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

