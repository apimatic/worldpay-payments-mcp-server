# 3 DS Actions

```ts
const m3DSActionsController = new M3DSActionsController(client);
```

## Class Name

`M3DSActionsController`

## Methods

* [Supply 3 Ds Device Data](../../doc/controllers/3-ds-actions.md#supply-3-ds-device-data)
* [Complete 3 Ds Challenge](../../doc/controllers/3-ds-actions.md#complete-3-ds-challenge)


# Supply 3 Ds Device Data

Gather additional device data

```ts
async supply3dsDeviceData(
  linkData: string,
  wPApiVersion: WPApiVersionEnum,
  body?: DeviceDataRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<DeviceDataResponse201>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkData` | `string` | Template, Required | - |
| `wPApiVersion` | [`WPApiVersionEnum`](../../doc/models/wp-api-version-enum.md) | Header, Required | The API version |
| `body` | [`DeviceDataRequest \| undefined`](../../doc/models/device-data-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`DeviceDataResponse201`](../../doc/models/device-data-response-201.md).

## Example Usage

```ts
const linkData = 'linkData6';

const wPApiVersion = WPApiVersionEnum.Enum20240601;

try {
  const { result, ...httpResponse } = await m3DSActionsController.supply3dsDeviceData(
    linkData,
    wPApiVersion
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
  "outcome": "3dsChallenged",
  "transactionReference": "Memory265-13/08/1876",
  "authentication": {
    "version": "2.1.0"
  },
  "challenge": {
    "reference": "706hovL8DK1tIGGzQUV1",
    "url": "https://centinelapistag.cardinalcommerce.com/V2/Cruise/StepUp",
    "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJPcmdVbml0SWQiOiI2NjAzMDA3YWJlMjMxZTM1ZTNmNTRjODkiLCJPYmplY3RpZnlQYXlsb2FkIjpmYWxzZSwiaXNzIjoiNjYwMzAwN2ExNmRkOWE3ZTZhMDMzNDA3IiwiUmV0dXJuVXJsIjoiaHR0cDovL3BheW1lbnQuZXhhbXBsZS5jb20iLCJQYXlsb2FkIjoie1wiUGF5bG9hZFwiOlwiZXlKdFpYTnpZV2RsVkhsd1pTSTZJa05TWlhFaUxDSnRaWE56WVdkbFZtVnljMmx2YmlJNklqSXVNUzR3SWl3aWRHaHlaV1ZFVTFObGNuWmxjbFJ5WVc1elNVUWlPaUppTkRKbE5UWmpaaTAyWkRrMkxUUXpNek10T0dJMk5DMWlNbVU0TldZMFpURTFaVGtpTENKaFkzTlVjbUZ1YzBsRUlqb2laV1ZqWldZeE1ETXRNRE13TVMwMFpUbGtMVGsxTmpFdE56ZGlNbVkzTlRFMk5HUmhJaXdpWTJoaGJHeGxibWRsVjJsdVpHOTNVMmw2WlNJNklqQTBJbjBcIixcIkFDU1VybFwiOlwiaHR0cHM6XFwvXFwvMW1lcmNoYW50YWNzc3RhZy5jYXJkaW5hbGNvbW1lcmNlLmNvbVxcL01lcmNoYW50QUNTV2ViXFwvY3JlcS5qc3BcIixcIlRyYW5zYWN0aW9uSWRcIjpcIjcwNmhvdkw4REsxdElHR3pRVVYxXCJ9IiwiZXhwIjoxNzEyMzA2MDk0LCJpYXQiOjE3MTIzMDU0OTQsImp0aSI6IjE4YTIwYzNkLTZhZmMtNDA5My04NGEwLTQ2OGEyYTY5MTE0OCJ9.YEpOuTxnqrXRiHan-givWBd6FfTDJOfNg-h2dF2yA6A",
    "payload": "eyJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiJiNDJlNTZjZi02ZDk2LTQzMzMtOGI2NC1iMmU4NWY0ZTE1ZTkiLCJhY3NUcmFuc0lEIjoiZWVjZWYxMDMtMDMwMS00ZTlkLTk1NjEtNzdiMmY3NTE2NGRhIiwiY2hhbGxlbmdlV2luZG93U2l6ZSI6IjA0In0"
  },
  "_actions": {
    "complete3dsChallenge": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoxLCJkIjoiZXlOaXNtU0lzQnVLTm5BQkt1WjEyMVFxeXg2bUZtb2hEcEpFeDdyYXZ3SDE3NFBpUTBsWUpwekptbW9hR3VVSyJ9/3dsChallenges",
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
| 406 | Not acceptable | [`HeaderErrorResponseError`](../../doc/models/header-error-response-error.md) |
| 415 | Unsupported media type | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 500 | Internal server error | [`ErrorResponseError`](../../doc/models/error-response-error.md) |


# Complete 3 Ds Challenge

Verify authentication challenge

```ts
async complete3dsChallenge(
  linkData: string,
  wPApiVersion: WPApiVersionEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ChallengeResponse201>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkData` | `string` | Template, Required | - |
| `wPApiVersion` | [`WPApiVersionEnum`](../../doc/models/wp-api-version-enum.md) | Header, Required | The API version |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ChallengeResponse201`](../../doc/models/challenge-response-201.md).

## Example Usage

```ts
const linkData = 'linkData6';

const wPApiVersion = WPApiVersionEnum.Enum20240601;

try {
  const { result, ...httpResponse } = await m3DSActionsController.complete3dsChallenge(
    linkData,
    wPApiVersion
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
  "fraud": {
    "outcome": "lowRisk",
    "score": 44.6
  },
  "threeDS": {
    "outcome": "authenticated",
    "issuerResponse": "challenged",
    "version": "2.2.0",
    "eci": "05",
    "acsTransactionId": "559c8bd8-edfb-417a-9f98-99018596242d",
    "dsTransactionId": "220403a5-62f8-4df0-9418-abfa092775c9",
    "status": "Y",
    "challengePreference": "noPreference"
  },
  "token": {
    "href": "https://try.access.worldpay.com/tokens/eyJrIjoxLCJkIjoiRVl3SDBtNnpEVmVTR3UzRUV3VEJEVDExTkxuVDVydXNiREdLR01hUXUwVT0ifQ",
    "tokenId": "9968110159504301628",
    "tokenExpiryDateTime": "2024-04-11T15:59:23Z",
    "cardNumber": "4000********1000",
    "cardHolderName": "test",
    "cardExpiry": {
      "year": 2035,
      "month": 5
    },
    "bin": "400000",
    "fundingType": "debit",
    "schemeReference": "060720116005060",
    "conflicts": {
      "conflictsExpiryDateTime": "2024-07-04T06:40:32.310316518Z",
      "paymentInstrument": {
        "cardHolderName": "John Snow"
      }
    }
  },
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
| 406 | Not acceptable | [`HeaderErrorResponseError`](../../doc/models/header-error-response-error.md) |
| 415 | Unsupported media type | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 500 | Internal server error | [`ErrorResponseError`](../../doc/models/error-response-error.md) |

