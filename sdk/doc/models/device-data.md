
# Device Data

An object containing device data for 3DS & Fraud assessment.

*This model accepts additional fields of type unknown.*

## Structure

`DeviceData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptHeader` | `string` | Required | Used by the issuer to check if the customer's browser is compatible with the issuer 3DS challenge display.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048` |
| `userAgentHeader` | `string` | Required | Used by issuers as part of risk analysis and correctly displaying the challenge. Must conform to RFC 7321.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048` |
| `browserLanguage` | `string \| undefined` | Optional | Your customer's browser language that can be used by the issuer in risk analysis. Must conform to the language tags defined by IETF. E.g. en-GB, fr-FR.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `8` |
| `browserJavaEnabled` | `boolean \| undefined` | Optional | Defines whether Java is enabled on your customers browser. |
| `browserColorDepth` | [`BrowserColorDepth \| undefined`](../../doc/models/browser-color-depth.md) | Optional | The color depth of your customers browser |
| `browserScreenHeight` | `number \| undefined` | Optional | Defines the pixel height of the customers browser. |
| `browserScreenWidth` | `number \| undefined` | Optional | Defines the pixel width of the customers browser. |
| `timeZone` | `string \| undefined` | Optional | Time zone offset in minutes between UTC and your customer's browser local time.  <br>Example time zone offset values in minutes:  <br>If UTC -5 hours:  <br>`300`  <br>`+300`  <br>If UTC +5 hours:  <br>`-300`<br><br>**Constraints**: *Pattern*: `^[+-]?\d{1,4}$` |
| `browserJavascriptEnabled` | `boolean \| undefined` | Optional | Defines whether Javascript is enabled on your customers browser. |
| `channel` | [`Channel \| undefined`](../../doc/models/channel.md) | Optional | Determines the channel that the transaction came through. `native` should only be set if using the Cardinal 3DS SDK (iOS/Android) |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "acceptHeader": "acceptHeader2",
  "userAgentHeader": "userAgentHeader2",
  "browserLanguage": "browserLanguage2",
  "browserJavaEnabled": false,
  "browserColorDepth": "16",
  "browserScreenHeight": 18,
  "browserScreenWidth": 22,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

