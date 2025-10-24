
# Settlement

Automatically settle a payment following authorization. If any of the AVS/CVC response riskFactors are marked as `notMatched` the payment will be `sentForCancellation` automatically.

Read more on how to set it up under our [__Auto Settlement__](/products/payments/enable-features/auto-settlement) guide.

## Structure

`Settlement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `auto` | `boolean` | Required | - |
| `cancelOn` | [`Cancellation \| undefined`](../../doc/models/cancellation.md) | Optional | Configuration for when a payment is `sentForCancellation` automatically. |

## Example (as JSON)

```json
{
  "auto": false,
  "cancelOn": {
    "cvcNotMatched": "enabled",
    "avsNotMatched": "enabled"
  }
}
```

