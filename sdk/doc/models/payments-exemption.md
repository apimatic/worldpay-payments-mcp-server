
# Payments Exemption

An object containing information about the exemption.

## Structure

`PaymentsExemption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `granted` | `boolean \| undefined` | Optional | Was an exemption returned by Worldpay's TRA assessment. |
| `placement` | [`PlacementEnum \| undefined`](../../doc/models/placement-enum.md) | Optional | Indicates whether the exemption has been placed in a payment authorization request or 3DS authentication request. |
| `type` | [`Type2Enum \| undefined`](../../doc/models/type-2-enum.md) | Optional | The type of applied exemption. |
| `result` | [`ResultEnum \| undefined`](../../doc/models/result-enum.md) | Optional | The result of the exemption placement request. |
| `reason` | [`ReasonEnum \| undefined`](../../doc/models/reason-enum.md) | Optional | The reason returned by the card issuer. |

## Example (as JSON)

```json
{
  "granted": false,
  "placement": "authorization",
  "type": "lowRisk",
  "result": "honored",
  "reason": "unsupportedAcquirer"
}
```

