
# Payments Three DS

An object containing 3DS authentication preferences.

Read more on how to set it up under our [__3DS Authentication__](/products/payments/enable-features/3ds-authentication) guide.

## Structure

`PaymentsThreeDS`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | **Value**: `'integrated'` |
| `mode` | `string` | Required, Constant | **Value**: `'always'` |
| `challenge` | [`Challenge`](../../doc/models/challenge.md) | Required | An object containing 3DS challenge preferences and configuration. |
| `deviceData` | [`DeviceData`](../../doc/models/device-data.md) | Required | An object containing device data for 3DS & Fraud assessment. |
| `exemptionOnOutage` | `boolean \| undefined` | Optional | Attempt authorization (without liability shift) using an authentication outage exemption in the event of a 3DS network failure. Even with this boolean set it is not currently part of default merchant setup. See [how to enable authentication outage exemptions](/products/payments/enable-features/3ds-authentication#how-to-enable-authentication-outage-exemptions)<br><br>**Default**: `false` |
| `previousSuspiciousActivity` | `boolean \| undefined` | Optional | Has the account been flagged for suspicious activity. |
| `userType` | [`UserTypeEnum \| undefined`](../../doc/models/user-type-enum.md) | Optional | - |
| `accountHistory` | [`AccountHistory \| undefined`](../../doc/models/account-history.md) | Optional | Customer account history. |
| `reorder` | `boolean \| undefined` | Optional | Repeat of a previous order. |
| `preOrderDate` | `string \| undefined` | Optional | Expected date that a pre-ordered purchase will be available. |
| `transactionHistory` | [`TransactionHistory \| undefined`](../../doc/models/transaction-history.md) | Optional | Object containing details of the last transaction. |
| `giftCardsPurchase` | [`PaymentsGiftCardsPurchase \| undefined`](../../doc/models/payments-gift-cards-purchase.md) | Optional | If the order is being used to purchase a gift card. |

## Example (as JSON)

```json
{
  "type": "integrated",
  "mode": "always",
  "challenge": {
    "returnUrl": "returnUrl6",
    "windowSize": "390x400",
    "preference": "noPreference"
  },
  "deviceData": {
    "acceptHeader": "acceptHeader4",
    "userAgentHeader": "userAgentHeader4",
    "browserLanguage": "browserLanguage4",
    "browserJavaEnabled": false,
    "browserColorDepth": "16",
    "browserScreenHeight": 114,
    "browserScreenWidth": 118
  },
  "exemptionOnOutage": false,
  "previousSuspiciousActivity": false,
  "userType": "guestUser",
  "accountHistory": {
    "createdAt": "createdAt2",
    "modifiedAt": "modifiedAt2",
    "passwordModifiedAt": "passwordModifiedAt0",
    "paymentAccountEnrolledAt": "paymentAccountEnrolledAt2"
  },
  "reorder": false
}
```

