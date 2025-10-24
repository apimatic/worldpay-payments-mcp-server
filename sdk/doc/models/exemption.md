
# Exemption

An object used to request or specify an SCA Exemption.

Read more on how to set it up under our [__SCA Exemptions__](/products/payments/enable-features/sca-exemptions) guide.

## Structure

`Exemption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type11Enum`](../../doc/models/type-11-enum.md) | Required | Ask for an SCA exemption recommendation directly from Worldpay (integrated) or use a 3rd party TRA solution.<br>__Note:__ Only type `integrated` is supported for now. |
| `mode` | [`Mode1Enum`](../../doc/models/mode-1-enum.md) | Required | Specify which transactions to request SCA Exemptions for. |
| `capability` | [`CapabilityEnum`](../../doc/models/capability-enum.md) | Required | Indicates whether the exemption requested from Worldpay can return a placement of authorization (payment) and/or authentication (3DS).<br>__Note:__ Only exemptions in authorization are supported for now. |

## Example (as JSON)

```json
{
  "type": "integrated",
  "mode": "always",
  "capability": "authorizationOnly"
}
```

