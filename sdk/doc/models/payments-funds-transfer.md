
# Payments Funds Transfer

Contains details of the funds transfer request, which is a money movement for a reason other than the purchase of goods or services (also known as Account Funding Transaction (AFT)).

Read more on how to set it up under our [__Account Funding Transactions__](/products/payments/enable-features/account-funding-transactions) guide.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentsFundsTransfer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type3`](../../doc/models/type-3.md) | Required | Specifies the type of the funds transfer. {% admonition type="warning" name="Note" %} You may only submit the `fundsTransfer.type` values that relate to the use cases that you have been approved for by the schemes.{% /admonition %} |
| `purpose` | [`Purpose \| undefined`](../../doc/models/purpose.md) | Optional | Specifies the purpose of the funds transfer. Required for some regions and use cases (eg crypto). |
| `recipient` | [`PaymentsFundsRecipient \| undefined`](../../doc/models/payments-funds-recipient.md) | Optional | An object containing details about the recipient of funds, including name and address information, as well as recipient account details. In many use cases, the recipient is the same person as the sender (for example if your customer uses their card to load funds into their own crypto exchange or investment account). __Although an optional object in the API schema, `recipient` is required for some regions and use cases.__ |
| `sender` | [`PaymentsFundsSender \| undefined`](../../doc/models/payments-funds-sender.md) | Optional | An object containing details about the sender of funds, including name and address information. The sender account is always the card account declared within `instruction.paymentInstrument`. __Although an optional object in the API schema, `sender` is required for some regions and use cases.__ |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "walletLoad",
  "purpose": "travel",
  "recipient": {
    "account": {
      "type": "PaymentsRecipientAccount",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
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
      "countryCode": "countryCode8",
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
      "countryCode": "countryCode8",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "dateOfBirth": "2016-03-13T12:52:32.123Z",
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

