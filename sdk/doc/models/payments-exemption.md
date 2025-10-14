
# Payments Exemption

An object containing information about the exemption.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsExemption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `granted` | `boolean \| undefined` | Optional | Was an exemption returned by Worldpay's TRA assessment. |
| `placement` | [`Placement \| undefined`](../../doc/models/placement.md) | Optional | Indicates whether the exemption has been placed in a payment authorization request or 3DS authentication request. |
| `type` | [`Type2 \| undefined`](../../doc/models/type-2.md) | Optional | The type of applied exemption. |
| `result` | [`Result \| undefined`](../../doc/models/result.md) | Optional | The result of the exemption placement request. |
| `reason` | [`Reason \| undefined`](../../doc/models/reason.md) | Optional | The reason returned by the card issuer. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "granted": false,
  "placement": "authorization",
  "type": "lowRisk",
  "result": "honored",
  "reason": "unsupportedAcquirer",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

