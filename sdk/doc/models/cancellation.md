
# Cancellation

Configuration for when a payment is `sentForCancellation` automatically.

*This model accepts additional fields of type unknown.*

## Structure

`Cancellation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cvcNotMatched` | [`CvcNotMatched \| undefined`](../../doc/models/cvc-not-matched.md) | Optional | By default a payment will be `sentForCancellation` if the CVC is `notMatched`, set `disabled` to continue with `sentForSettlement`. |
| `avsNotMatched` | [`AvsNotMatched \| undefined`](../../doc/models/avs-not-matched.md) | Optional | By default a payment will be `sentForCancellation` if the `address` or `postcode` AVS is `notMatched`, set `disabled` to continue with `sentForSettlement`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "cvcNotMatched": "enabled",
  "avsNotMatched": "enabled",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

