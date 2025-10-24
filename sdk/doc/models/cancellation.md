
# Cancellation

Configuration for when a payment is `sentForCancellation` automatically.

## Structure

`Cancellation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cvcNotMatched` | [`CvcNotMatchedEnum \| undefined`](../../doc/models/cvc-not-matched-enum.md) | Optional | By default a payment will be `sentForCancellation` if the CVC is `notMatched`, set `disabled` to continue with `sentForSettlement`. |
| `avsNotMatched` | [`AvsNotMatchedEnum \| undefined`](../../doc/models/avs-not-matched-enum.md) | Optional | By default a payment will be `sentForCancellation` if the `address` or `postcode` AVS is `notMatched`, set `disabled` to continue with `sentForSettlement`. |

## Example (as JSON)

```json
{
  "cvcNotMatched": "enabled",
  "avsNotMatched": "enabled"
}
```

