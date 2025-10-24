
# Sent for Settlement Response

## Structure

`SentForSettlementResponse`

## Inherits From

[`DeviceDataResponse201`](../../doc/models/device-data-response-201.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrument` | [`PaymentsResponsePaymentInstrument \| undefined`](../../doc/models/payments-response-payment-instrument.md) | Optional | - |
| `updatedPaymentInstrument` | [`UpdatedPaymentInstrument \| undefined`](../../doc/models/updated-payment-instrument.md) | Optional | Details of the updated payment instrument. |
| `issuer` | [`Issuer \| undefined`](../../doc/models/issuer.md) | Optional | An object containing information returned by the issuer. |
| `riskFactors` | [`RiskFactor[] \| undefined`](../../doc/models/risk-factor.md) | Optional | Any risk factors which have been identified for the authorization. This section will not appear if no risks are identified. |
| `fraud` | [`Fraud \| undefined`](../../doc/models/fraud.md) | Optional | Details of the outcome of the Fraud assessment |
| `threeDS` | [`Verification \| undefined`](../../doc/models/verification.md) | Optional | Details of the outcome of the 3DS authentication |
| `exemption` | [`PaymentsExemption \| undefined`](../../doc/models/payments-exemption.md) | Optional | An object containing information about the exemption. |
| `schemeReference` | `string \| undefined` | Optional | An object containing information returned by the scheme. |
| `token` | [`Token \| undefined`](../../doc/models/token.md) | Optional | Details of the token created |
| `links` | [`PaymentsLink \| undefined`](../../doc/models/payments-link.md) | Optional | Return details about the status of the payment |
| `actions` | [`SentForSettlementActionList \| undefined`](../../doc/models/sent-for-settlement-action-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "sentForSettlement",
  "transactionReference": "transactionReference8",
  "paymentInstrument": {
    "type": "type0",
    "cardBin": "cardBin6",
    "lastFour": "lastFour4",
    "countryCode": "countryCode4",
    "expiryDate": {
      "year": 20,
      "month": 244
    }
  },
  "updatedPaymentInstrument": {
    "appliedNetworkToken": false,
    "type": "card/plain",
    "accountUpdaterMessage": "The merchant is not registered in the update program",
    "cardNumber": "cardNumber2",
    "cardBin": "cardBin2"
  },
  "issuer": {
    "authorizationCode": "authorizationCode8"
  },
  "riskFactors": [
    {
      "risk": "notSupplied",
      "detail": "address",
      "type": "cvc"
    }
  ],
  "fraud": {
    "outcome": "review(silentMode)",
    "score": 113.14
  }
}
```

