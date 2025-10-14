
# Partial Refund Action List

*This model accepts additional fields of type unknown.*

## Structure

`PartialRefundActionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `partiallyRefundPayment` | [`PaymentsActionPartialRefund \| undefined`](../../doc/models/payments-action-partial-refund.md) | Optional | Partially refund the payment. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
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

