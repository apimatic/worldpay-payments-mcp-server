
# Verification

Details of the outcome of the 3DS authentication

*This model accepts additional fields of type unknown.*

## Structure

`Verification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | [`Outcome7 \| undefined`](../../doc/models/outcome-7.md) | Optional | If the request was authenticated successfully or an authentication outage exemption was applied in authorization. See details on [Authentication Outage](/products/payments/enable-features/3ds-authentication#how-to-enable-authentication-outage-exemptions)<br><br>**Default**: `Outcome7.Authenticated` |
| `issuerResponse` | [`IssuerResponse \| undefined`](../../doc/models/issuer-response.md) | Optional | If the issuer decides to challenge the customer or proceed (frictionless) |
| `version` | `string \| undefined` | Optional | The version of 3DS used to process the transaction.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |
| `eci` | `string \| undefined` | Optional | Electronic Commerce Indicator (ECI). Indicates the outcome of the 3DS authentication.<br><br>\| ECI \| Meaning \|<br>\| --- \| --- \|<br>\| 02 or 05 \| Fully Authenticated Transaction<br>\| 01 or 06 \| Attempted Authentication Transaction<br>\| 00 or 07 \| Non 3-D Secure Transaction<br><br>\| Scheme \| Value \|<br>\| --- \| --- \|<br>\| Mastercard \| 02, 01, 00 \|<br>\| Visa \| 05, 06, 07 \|<br>\| Amex \| 05, 06, 07 \|<br>\| JCB \| 05, 06, 07 \|<br>\| Diners \| 05, 06, 07 \|<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2` |
| `acsTransactionId` | `string \| undefined` | Optional | An identifier assigned by the Access Control Server (ACS) to identify a single transaction. Used primarily for Mastercard 3RI subsequent transactions to link the subsequent transaction back to a previous cardholder authentication. Can be disregarded unless otherwise needed.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `dsTransactionId` | `string \| undefined` | Optional | Directory server transaction Id, if provided should be used in the payment authorization authentication object.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `status` | `string \| undefined` | Optional | Indicates the outcome of the authentication or verification request.<br><br>- `Y` - Successful authentication<br>- `N` - Failed authentication<br>- `U` - Unable to complete authentication<br>- `A` - Successful attempts authentication<br>- `C` - Challenged authentication<br>- `R` - Authentication rejected (merchant _must not_ submit for authorization)<br>- `I` - Exemption acknowledged<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2` |
| `challengePreference` | `string \| undefined` | Optional | Indicates the preferred challenge behavior. __Returned for Cartes Bancaires authentications only__ and must be applied in the following authorization request.<br><br>- `noPreference`<br>- `noChallengeRequested`<br>- `challengeRequested`<br>- `challengeMandated`<br>- `noChallengeRequestedTRAPerformed`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "authenticated",
  "issuerResponse": "frictionless",
  "version": "version6",
  "eci": "eci0",
  "acsTransactionId": "acsTransactionId4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

