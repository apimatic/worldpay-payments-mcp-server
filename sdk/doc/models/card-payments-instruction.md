
# Card Payments Instruction

## Structure

`CardPaymentsInstruction`

## Inherits From

[`PaymentsInstruction`](../../doc/models/payments-instruction.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fundsTransfer` | [`PaymentsFundsTransfer \| undefined`](../../doc/models/payments-funds-transfer.md) | Optional | Contains details of the funds transfer request, which is a money movement for a reason other than the purchase of goods or services (also known as Account Funding Transaction (AFT)).<br><br>Read more on how to set it up under our [__Account Funding Transactions__](/products/payments/enable-features/account-funding-transactions) guide. |

## Example (as JSON)

```json
{
  "method": "card",
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
  },
  "fundsTransfer": {
    "type": "purchase",
    "purpose": "businessToBusiness",
    "recipient": {
      "account": {
        "type": "PaymentsRecipientAccount"
      },
      "firstName": "firstName6",
      "middleName": "middleName6",
      "lastName": "lastName2",
      "address": {
        "address1": "address14",
        "address2": "address28",
        "city": "city6",
        "postalCode": "postalCode8",
        "state": "state2",
        "countryCode": "countryCode8"
      }
    },
    "sender": {
      "firstName": "firstName6",
      "middleName": "middleName6",
      "lastName": "lastName2",
      "address": {
        "address1": "address14",
        "address2": "address28",
        "city": "city6",
        "postalCode": "postalCode8",
        "state": "state2",
        "countryCode": "countryCode8"
      },
      "dateOfBirth": "2016-03-13T12:52:32.123Z"
    }
  }
}
```

