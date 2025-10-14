
# Payments Instruction

An object that contains all information related to the payment and API configurations.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsInstruction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `method` | `string \| undefined` | Optional | - |
| `paymentInstrument` | [`PaymentsInstructionPaymentInstrument`](../../doc/models/containers/payments-instruction-payment-instrument.md) | Required | This is a container for any-of cases. |
| `narrative` | [`Narrative`](../../doc/models/narrative.md) | Required | The text that appears on your customer's statement. Used to identify the merchant. |
| `tokenCreation` | [`TokenCreation \| undefined`](../../doc/models/token-creation.md) | Optional | Use this object if you want to create a token after the payment. Can only be used with paymentInstrument.type: card/plain & checkout. |
| `value` | [`Value`](../../doc/models/value.md) | Required | - |
| `debtRepayment` | `boolean \| undefined` | Optional | A flag which identifies a payment as being for the purpose of repaying a debt. |
| `fraud` | [`PaymentsFraud \| undefined`](../../doc/models/payments-fraud.md) | Optional | Fraud assessment to detect potential fraud and prevent the transaction from proceeding.<br><br>Read more on how to set it up under our [__Fraud Assessment__](/products/payments/enable-features/fraud-assessment) guide. |
| `threeDs` | [`PaymentsThreeDs \| undefined`](../../doc/models/payments-three-ds.md) | Optional | An object containing 3DS authentication preferences.<br><br>Read more on how to set it up under our [__3DS Authentication__](/products/payments/enable-features/3ds-authentication) guide. |
| `exemption` | [`Exemption \| undefined`](../../doc/models/exemption.md) | Optional | An object used to request or specify an SCA Exemption.<br><br>Read more on how to set it up under our [__SCA Exemptions__](/products/payments/enable-features/sca-exemptions) guide. |
| `settlement` | [`Settlement \| undefined`](../../doc/models/settlement.md) | Optional | Automatically settle a payment following authorization. If any of the AVS/CVC response riskFactors are marked as `notMatched` the payment will be `sentForCancellation` automatically.<br><br>Read more on how to set it up under our [__Auto Settlement__](/products/payments/enable-features/auto-settlement) guide. |
| `customer` | [`Customer \| undefined`](../../doc/models/customer.md) | Optional | - |
| `shipping` | [`Shipping \| undefined`](../../doc/models/shipping.md) | Optional | - |
| `customerAgreement` | [`PaymentsInstructionCustomerAgreement \| undefined`](../../doc/models/containers/payments-instruction-customer-agreement.md) | Optional | This is a container for any-of cases. |
| `recipient` | [`PaymentsRecipient \| undefined`](../../doc/models/payments-recipient.md) | Optional | An object containing information about the recipient of financial services. Required for MCC 6012 transactions in the Visa Europe region. The recipient may or may not be the cardholder.<br><br>Read more on how to set it up under our [__Financial Services__](/products/payments/enable-features/financial-services-mcc6012-mcc6051) guide. |
| `consumerBillPayment` | `boolean \| undefined` | Optional | An attribute that identifies a bill payment paid by providers on behalf of consumers. If you are registered with Visa as a Consumer of the Bill Payment Service (CBPS), you must set this to `true` for any payments associated with the CBPS. |
| `requestAccountUpdater` | `boolean \| undefined` | Optional | Allows you to request a real-time account update (Visa cards only) when using a previously stored card. You can only use this on subsequent card requests. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "paymentInstrument": {
    "cardNumber": "4000000000001091",
    "cardHolderName": "Sherlock Holmes",
    "expiryDate": {
      "year": 2028,
      "month": 6,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "cvc": "123",
    "type": "plain",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    },
    "billingAddress": {
      "address1": "address10",
      "address2": "address24",
      "address3": "address32",
      "postalCode": "postalCode6",
      "city": "city8",
      "state": "state2",
      "countryCode": "countryCode2",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "routing": {
      "preferredCardBrand": "amex",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  },
  "narrative": {
    "line1": "line18",
    "line2": "line20",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "value": {
    "currency": "USD",
    "amount": 250,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "method": "PaymentsInstruction",
  "tokenCreation": {
    "type": "type6",
    "namespace": "namespace8",
    "description": "description4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "debtRepayment": false,
  "fraud": {
    "type": "type6",
    "silentMode": false,
    "tmxSessionId": "tmxSessionId0",
    "custom": {
      "number1": 30,
      "number2": 56,
      "number3": 50,
      "number4": 192,
      "number5": 218,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "threeDS": {
    "type": "type8",
    "mode": "mode0",
    "challenge": {
      "returnUrl": "returnUrl6",
      "windowSize": "250x400",
      "preference": "noPreference",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "deviceData": {
      "acceptHeader": "acceptHeader4",
      "userAgentHeader": "userAgentHeader4",
      "browserLanguage": "browserLanguage4",
      "browserJavaEnabled": false,
      "browserColorDepth": "16",
      "browserScreenHeight": 114,
      "browserScreenWidth": 118,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "exemptionOnOutage": false,
    "previousSuspiciousActivity": false,
    "userType": "thirdPartyAuthentication",
    "accountHistory": {
      "createdAt": "createdAt2",
      "modifiedAt": "modifiedAt2",
      "passwordModifiedAt": "passwordModifiedAt0",
      "paymentAccountEnrolledAt": "paymentAccountEnrolledAt2",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "reorder": false,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

