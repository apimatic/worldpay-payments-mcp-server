
# Exemption

An object used to request or specify an SCA Exemption.

Read more on how to set it up under our [__SCA Exemptions__](/products/payments/enable-features/sca-exemptions) guide.

*This model accepts additional fields of type unknown.*

## Structure

`Exemption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type10`](../../doc/models/type-10.md) | Required | Ask for an SCA exemption recommendation directly from Worldpay (integrated) or use a 3rd party TRA solution.<br>__Note:__ Only type `integrated` is supported for now. |
| `mode` | [`Mode1`](../../doc/models/mode-1.md) | Required | Specify which transactions to request SCA Exemptions for. |
| `capability` | [`Capability`](../../doc/models/capability.md) | Required | Indicates whether the exemption requested from Worldpay can return a placement of authorization (payment) and/or authentication (3DS).<br>__Note:__ Only exemptions in authorization are supported for now. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "integrated",
  "mode": "always",
  "capability": "authorizationOnly",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

