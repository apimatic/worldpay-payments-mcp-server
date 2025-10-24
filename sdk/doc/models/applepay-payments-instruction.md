
# Applepay Payments Instruction

## Structure

`ApplepayPaymentsInstruction`

## Inherits From

[`PaymentsInstruction`](../../doc/models/payments-instruction.md)

## Fields

|  |
| 

## Example (as JSON)

```json
{
  "method": "applepay",
  "paymentInstrument": {
    "type": "plain",
    "cardNumber": "cardNumber2",
    "cardHolderName": "cardHolderName0",
    "expiryDate": {
      "year": 20,
      "month": 244
    },
    "cvc": "cvc0",
    "billingAddress": {
      "address1": "address10",
      "address2": "address24",
      "address3": "address32",
      "postalCode": "postalCode6",
      "city": "city8",
      "state": "state2",
      "countryCode": "countryCode2"
    },
    "routing": {
      "preferredCardBrand": "amex"
    }
  },
  "narrative": {
    "line1": "line18",
    "line2": "line20"
  },
  "tokenCreation": {
    "type": "worldpay",
    "namespace": "namespace8",
    "description": "description4"
  },
  "value": {
    "currency": "currency2",
    "amount": 18
  },
  "debtRepayment": false,
  "fraud": {
    "type": "fraudSight",
    "silentMode": false,
    "tmxSessionId": "tmxSessionId0",
    "custom": {
      "number1": 30,
      "number2": 56,
      "number3": 50,
      "number4": 192,
      "number5": 218
    }
  },
  "threeDS": {
    "type": "integrated",
    "mode": "always",
    "challenge": {
      "returnUrl": "returnUrl6",
      "windowSize": "250x400",
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
    "userType": "thirdPartyAuthentication",
    "accountHistory": {
      "createdAt": "createdAt2",
      "modifiedAt": "modifiedAt2",
      "passwordModifiedAt": "passwordModifiedAt0",
      "paymentAccountEnrolledAt": "paymentAccountEnrolledAt2"
    },
    "reorder": false
  }
}
```

