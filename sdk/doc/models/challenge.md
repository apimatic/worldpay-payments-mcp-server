
# Challenge

An object containing 3DS challenge preferences and configuration.

## Structure

`Challenge`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `returnUrl` | `string` | Required | Once the customer completes the challenge page the issuer redirects/posts to the returnUrl in order for you to resume the session. It must be the full URL path. |
| `windowSize` | [`WindowSizeEnum \| undefined`](../../doc/models/window-size-enum.md) | Optional | Specify the challenge window size (width x height) that the issuer should use. This is to better tailor the experience to the customers device. Default is 390x400.<br><br>**Default**: `WindowSizeEnum.Enum390x400` |
| `preference` | [`PreferenceEnum \| undefined`](../../doc/models/preference-enum.md) | Optional | Set a preference for how the Issuer decides on a 3DS challenge. |

## Example (as JSON)

```json
{
  "returnUrl": "returnUrl2",
  "windowSize": "390x400",
  "preference": "challengeRequested"
}
```

