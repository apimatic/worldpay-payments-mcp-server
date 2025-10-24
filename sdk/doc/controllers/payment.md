# Payment

Take a payment

```ts
const paymentController = new PaymentController(client);
```

## Class Name

`PaymentController`


# Payment

Initiate Payment

```ts
async payment(
  wPApiVersion: WPApiVersionEnum,
  body: PaymentRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PaymentsResponse202>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wPApiVersion` | [`WPApiVersionEnum`](../../doc/models/wp-api-version-enum.md) | Header, Required | The API version |
| `body` | [`PaymentRequest`](../../doc/models/payment-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PaymentsResponse202`](../../doc/models/payments-response-202.md).

## Example Usage

```ts
const wPApiVersion = WPApiVersionEnum.Enum20240601;

const body: PaymentRequest = {
  transactionReference: 'Memory265-13/08/1876',
  merchant: {
    entity: 'default',
  },
  instruction: {
    paymentInstrument: {
      cardNumber: '4000000000001091',
      expiryDate: {
        year: 2035,
        month: 5,
      },
      cardHolderName: 'Sherlock Holmes',
      cvc: '123',
      billingAddress: {
        address1: '221B Baker Street',
        city: 'London',
        countryCode: 'GB',
        address2: 'Marylebone',
        address3: 'Westminster',
        postalCode: 'SW1 1AA',
        state: 'Greater London',
      },
      type: 'plain',
    },
    narrative: {
      line1: 'trading name',
    },
    value: {
      currency: 'GBP',
      amount: 42,
    },
    method: 'card',
  } as CardPaymentsInstruction,
};

try {
  const { result, ...httpResponse } = await paymentController.payment(
    wPApiVersion,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "outcome": "authorized",
  "transactionReference": "Memory265-13/08/1876",
  "schemeReference": "060720116005060",
  "issuer": {
    "authorizationCode": "675725"
  },
  "riskFactors": [
    {
      "risk": "notChecked",
      "type": "cvc"
    },
    {
      "risk": "notChecked",
      "detail": "address",
      "type": "avs"
    },
    {
      "risk": "notChecked",
      "detail": "postcode",
      "type": "avs"
    }
  ],
  "paymentInstrument": {
    "type": "card/plain+masked",
    "cardBin": "400000",
    "lastFour": "1000",
    "countryCode": "GB",
    "expiryDate": {
      "year": 2035,
      "month": 5
    },
    "cardBrand": "mastercard",
    "fundingType": "debit",
    "category": "consumer",
    "issuerName": "BANK LIMITED",
    "paymentAccountReference": "3001DBT34Q41D6J7PFC5W0UACOT4C"
  },
  "_links": {
    "self": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3AmZ%2BxHZ9nDpadu%2BBh7pRyJwnWeiSFTlqKvbrBxNm3HV0xann55pFjZ7qi4DNGZtx9zW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ%3AAwSoo6RsrBugbhEp0K8HxZkfVrqy4oVlW8FdQ7kIuZOH78i6pPLzArc%2BOtMdnU%3ArZ%3AVhRHFzbbwymcuTiRbNw%3D"
    }
  },
  "_actions": {
    "cancelPayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3AmZ%2BxHZ9nDpadu%2BBh7pRyJwnWeiSFTlqKvbrBxNm3HV0xann55pFjZ7qi4DNGZtx9zW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ%3AAwSoo6RsrBugbhEp0K8HxZkfVrqy4oVlW8FdQ7kIuZOH78i6pPLzArc%2BOtMdnU%3ArZ%3AVhRHFzbbwymcuTiRbNw%3D/cancellations",
      "method": "POST"
    },
    "settlePayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3AmZ%2BxHZ9nDpadu%2BBh7pRyJwnWeiSFTlqKvbrBxNm3HV0xann55pFjZ7qi4DNGZtx9zW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ%3AAwSoo6RsrBugbhEp0K8HxZkfVrqy4oVlW8FdQ7kIuZOH78i6pPLzArc%2BOtMdnU%3ArZ%3AVhRHFzbbwymcuTiRbNw%3D/settlements",
      "method": "POST"
    },
    "partiallySettlePayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3AmZ%2BxHZ9nDpadu%2BBh7pRyJwnWeiSFTlqKvbrBxNm3HV0xann55pFjZ7qi4DNGZtx9zW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ%3AAwSoo6RsrBugbhEp0K8HxZkfVrqy4oVlW8FdQ7kIuZOH78i6pPLzArc%2BOtMdnU%3ArZ%3AVhRHFzbbwymcuTiRbNw%3D/partialSettlements",
      "method": "POST"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`ValidationErrorResponseError`](../../doc/models/validation-error-response-error.md) |
| 401 | Unauthorized | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 404 | Not found | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 406 | Not acceptable | [`HeaderErrorResponseError`](../../doc/models/header-error-response-error.md) |
| 415 | Unsupported media type | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 500 | Internal server error | [`ErrorResponseError`](../../doc/models/error-response-error.md) |

