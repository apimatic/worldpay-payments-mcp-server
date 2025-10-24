# Manage Payments

```ts
const managePaymentsController = new ManagePaymentsController(client);
```

## Class Name

`ManagePaymentsController`

## Methods

* [Query Events](../../doc/controllers/manage-payments.md#query-events)
* [Settle](../../doc/controllers/manage-payments.md#settle)
* [Partial Settle](../../doc/controllers/manage-payments.md#partial-settle)
* [Refund](../../doc/controllers/manage-payments.md#refund)
* [Partial Refund](../../doc/controllers/manage-payments.md#partial-refund)
* [Cancel](../../doc/controllers/manage-payments.md#cancel)


# Query Events

Query a payment

```ts
async queryEvents(
  linkData: string,
  wPApiVersion: WPApiVersionEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<QueryEventsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkData` | `string` | Template, Required | - |
| `wPApiVersion` | [`WPApiVersionEnum`](../../doc/models/wp-api-version-enum.md) | Header, Required | The API version |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`QueryEventsResponse`](../../doc/models/query-events-response.md).

## Example Usage

```ts
const linkData = 'linkData6';

const wPApiVersion = WPApiVersionEnum.Enum20240601;

try {
  const { result, ...httpResponse } = await managePaymentsController.queryEvents(
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
  "lastEvent": "Authorized",
  "_actions": {
    "cancelPayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3AmYlUBT%2BOr7P8TngA%3ARIDbhErtAINgae8%3Al%2Bp%3A9IMRtnTDLLTmIV7UYK%3Ak9rhdyhosW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ7HtOLQhO1odRTC6UgXfG5MadLi6%3AwYpXojOybmc%3AWO461azZ4FL3HolsmUtf6UuHbZ%3AVhRHFzbbwymcuTiRbNw%3D/cancellations",
      "method": "POST"
    },
    "settlePayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3AmYlUBT%2BOr7P8TngA%3ARIDbhErtAINgae8%3Al%2Bp%3A9IMRtnTDLLTmIV7UYK%3Ak9rhdyhosW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ7HtOLQhO1odRTC6UgXfG5MadLi6%3AwYpXojOybmc%3AWO461azZ4FL3HolsmUtf6UuHbZ%3AVhRHFzbbwymcuTiRbNw%3D/settlements",
      "method": "POST"
    },
    "partiallySettlePayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3AmYlUBT%2BOr7P8TngA%3ARIDbhErtAINgae8%3Al%2Bp%3A9IMRtnTDLLTmIV7UYK%3Ak9rhdyhosW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ7HtOLQhO1odRTC6UgXfG5MadLi6%3AwYpXojOybmc%3AWO461azZ4FL3HolsmUtf6UuHbZ%3AVhRHFzbbwymcuTiRbNw%3D/partialSettlements",
      "method": "POST"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`ValidationErrorResponseError`](../../doc/models/validation-error-response-error.md) |
| 404 | Not found | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 500 | Internal server error | [`ErrorResponseError`](../../doc/models/error-response-error.md) |


# Settle

Settle a payment

```ts
async settle(
  linkData: string,
  wPApiVersion: WPApiVersionEnum,
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<SettleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkData` | `string` | Template, Required | - |
| `wPApiVersion` | [`WPApiVersionEnum`](../../doc/models/wp-api-version-enum.md) | Header, Required | The API version |
| `body` | `unknown \| undefined` | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`SettleResponse`](../../doc/models/settle-response.md).

## Example Usage

```ts
const linkData = 'linkData6';

const wPApiVersion = WPApiVersionEnum.Enum20240601;

try {
  const { result, ...httpResponse } = await managePaymentsController.settle(
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
  "outcome": "sentForSettlement",
  "_links": {
    "self": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amrpc69OgkOdsQcFu1REHDtf%3ADmgAoXvDPFmn0QZPIS4H4gS5sW2Mrlt4M7c6S1k5UW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ9hxVM07vmgQjdqz1DxFQ6AqNuDe44KOEtBqjjis8%3APhltX3idEtP6TkjNfQHRCHVbZ%3AVhRHFzbbwymcuTiRbNw%3D"
    }
  },
  "_actions": {
    "refundPayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amrpc69OgkOdsQcFu1REHDtf%3ADmgAoXvDPFmn0QZPIS4H4gS5sW2Mrlt4M7c6S1k5UW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ9hxVM07vmgQjdqz1DxFQ6AqNuDe44KOEtBqjjis8%3APhltX3idEtP6TkjNfQHRCHVbZ%3AVhRHFzbbwymcuTiRbNw%3D/refunds",
      "method": "POST"
    },
    "partiallyRefundPayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amrpc69OgkOdsQcFu1REHDtf%3ADmgAoXvDPFmn0QZPIS4H4gS5sW2Mrlt4M7c6S1k5UW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ9hxVM07vmgQjdqz1DxFQ6AqNuDe44KOEtBqjjis8%3APhltX3idEtP6TkjNfQHRCHVbZ%3AVhRHFzbbwymcuTiRbNw%3D/partialRefunds",
      "method": "POST"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 404 | Not found | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 406 | Not acceptable | [`HeaderErrorResponseError`](../../doc/models/header-error-response-error.md) |
| 415 | Unsupported media type | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 500 | Internal server error | [`ErrorResponseError`](../../doc/models/error-response-error.md) |


# Partial Settle

Partially settle a payment

```ts
async partialSettle(
  linkData: string,
  wPApiVersion: WPApiVersionEnum,
  body: PaymentsPartialSettleRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PartialSettleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkData` | `string` | Template, Required | - |
| `wPApiVersion` | [`WPApiVersionEnum`](../../doc/models/wp-api-version-enum.md) | Header, Required | The API version |
| `body` | [`PaymentsPartialSettleRequest`](../../doc/models/payments-partial-settle-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PartialSettleResponse`](../../doc/models/partial-settle-response.md).

## Example Usage

```ts
const linkData = 'linkData6';

const wPApiVersion = WPApiVersionEnum.Enum20240601;

const body: PaymentsPartialSettleRequest = {
  reference: 'partial-settle-reference',
  value: {
    currency: 'GBP',
    amount: 500,
  },
  sequence: {
    number: 1,
    total: 2,
  },
};

try {
  const { result, ...httpResponse } = await managePaymentsController.partialSettle(
    linkData,
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
  "outcome": "sentForSettlement",
  "_links": {
    "self": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amrpc69OgkOdsQcFu1REHDtf%3ADmgAoXvDPFmn0QZPIS4H4gS5sW2Mrlt4M7c6S1k5UW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ9hxVM07vmgQjdqz1DxFQ6AqNuDe44KOEtBqjjis8%3APhltX3idEtP6TkjNfQHRCHVbZ%3AVhRHFzbbwymcuTiRbNw%3D"
    }
  },
  "_actions": {
    "refundPayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amrpc69OgkOdsQcFu1REHDtf%3ADmgAoXvDPFmn0QZPIS4H4gS5sW2Mrlt4M7c6S1k5U4KCq84ktTU7AB2kOFpTY0bs7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ9hxVM07vmgQjdqz1DxFQ6AqNuDe44KOEtBqjjis8%3APhltX3idEtP6TkjNfQHRCHVbZ%3AVhRHFzbbwymcuTiRbNw%3D/refunds",
      "method": "POST"
    },
    "partiallyRefundPayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amrpc69OgkOdsQcFu1REHDtf%3ADmgAoXvDPFmn0QZPIS4H4gS5sW2Mrlt4M7c6S1k5U4KCq84ktTU7AB2kOFpTY0bs7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ9hxVM07vmgQjdqz1DxFQ6AqNuDe44KOEtBqjjis8%3APhltX3idEtP6TkjNfQHRCHVbZ%3AVhRHFzbbwymcuTiRbNw%3D/partialRefunds",
      "method": "POST"
    },
    "partiallySettlePayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amrpc69OgkOdsQcFu1REHDtf%3ADmgAoXvDPFmn0QZPIS4H4gS5sW2Mrlt4M7c6S1k5U4KCq84ktTU7AB2kOFpTY0bs7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ9hxVM07vmgQjdqz1DxFQ6AqNuDe44KOEtBqjjis8%3APhltX3idEtP6TkjNfQHRCHVbZ%3AVhRHFzbbwymcuTiRbNw%3D/partialSettlements",
      "method": "POST"
    },
    "cancelPayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amrpc69OgkOdsQcFu1REHDtf%3ADmgAoXvDPFmn0QZPIS4H4gS5sW2Mrlt4M7c6S1k5U4KCq84ktTU7AB2kOFpTY0bs7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ9hxVM07vmgQjdqz1DxFQ6AqNuDe44KOEtBqjjis8%3APhltX3idEtP6TkjNfQHRCHVbZ%3AVhRHFzbbwymcuTiRbNw%3D/cancellations",
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


# Refund

Refund a payment

```ts
async refund(
  linkData: string,
  wPApiVersion: WPApiVersionEnum,
  body?: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkData` | `string` | Template, Required | - |
| `wPApiVersion` | [`WPApiVersionEnum`](../../doc/models/wp-api-version-enum.md) | Header, Required | The API version |
| `body` | `unknown \| undefined` | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RefundResponse`](../../doc/models/refund-response.md).

## Example Usage

```ts
const linkData = 'linkData6';

const wPApiVersion = WPApiVersionEnum.Enum20240601;

try {
  const { result, ...httpResponse } = await managePaymentsController.refund(
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
  "outcome": "sentForRefund",
  "_links": {
    "self": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amp3aEvr3BYtH3ZBei61fRGtglovAih6FUXj2880UCtZGZ21djyVQzY36sEFMZMvXsW6eOLVNOsPL6ecsn3Dp377s7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ6i4R8ak4j6oWbsrX5AP4ErD6p2VzRF0yzljcK%2BKWD8%2BEEBcQpn0%3ADcXCJRXfVD0ibZ%3AVhRHFzbbwymcuTiRbNw%3D"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 404 | Not found | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 406 | Not acceptable | [`HeaderErrorResponseError`](../../doc/models/header-error-response-error.md) |
| 415 | Unsupported media type | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 500 | Internal server error | [`ErrorResponseError`](../../doc/models/error-response-error.md) |


# Partial Refund

Partially refund a payment

```ts
async partialRefund(
  linkData: string,
  wPApiVersion: WPApiVersionEnum,
  body: PaymentsPartialRefundRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<PartialRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkData` | `string` | Template, Required | - |
| `wPApiVersion` | [`WPApiVersionEnum`](../../doc/models/wp-api-version-enum.md) | Header, Required | The API version |
| `body` | [`PaymentsPartialRefundRequest`](../../doc/models/payments-partial-refund-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`PartialRefundResponse`](../../doc/models/partial-refund-response.md).

## Example Usage

```ts
const linkData = 'linkData6';

const wPApiVersion = WPApiVersionEnum.Enum20240601;

const body: PaymentsPartialRefundRequest = {
  reference: 'partial-refund-reference',
  value: {
    currency: 'GBP',
    amount: 10,
  },
};

try {
  const { result, ...httpResponse } = await managePaymentsController.partialRefund(
    linkData,
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
  "outcome": "sentForPartialRefund",
  "_links": {
    "self": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amrpc69OgkOdsQcFu1REHDtf%3ADmgAoXvDPFmn0QZPIS4H4gS5sW2Mrlt4M7c6S1k5U4KCq84ktTU7AB2kOFpTY0bs7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ9hxVM07vmgQjdqz1DxFQ6AqNuDe44KOEtBqjjis8%3APhltX3idEtP6TkjNfQHRCHVbZ%3AVhRHFzbbwymcuTiRbNw%3D"
    }
  },
  "_actions": {
    "partiallyRefundPayment": {
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Amrpc69OgkOdsQcFu1REHDtf%3ADmgAoXvDPFmn0QZPIS4H4gS5sW2Mrlt4M7c6S1k5U4KCq84ktTU7AB2kOFpTY0bs7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ9hxVM07vmgQjdqz1DxFQ6AqNuDe44KOEtBqjjis8%3APhltX3idEtP6TkjNfQHRCHVbZ%3AVhRHFzbbwymcuTiRbNw%3D/partialRefunds",
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


# Cancel

Cancel a payment

```ts
async cancel(
  linkData: string,
  wPApiVersion: WPApiVersionEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkData` | `string` | Template, Required | - |
| `wPApiVersion` | [`WPApiVersionEnum`](../../doc/models/wp-api-version-enum.md) | Header, Required | The API version |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CancelResponse`](../../doc/models/cancel-response.md).

## Example Usage

```ts
const linkData = 'linkData6';

const wPApiVersion = WPApiVersionEnum.Enum20240601;

try {
  const { result, ...httpResponse } = await managePaymentsController.cancel(
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
  "outcome": "sentForCancellation",
  "transactionReference": "f4806b75-89d1-498a-8634-bfa79afca54f",
  "schemeReference": "060720116005060",
  "issuer": {
    "authorizationCode": "675725"
  },
  "riskFactors": [
    {
      "risk": "notMatched",
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
    "score": 44
  },
  "threeDS": {
    "outcome": "authenticated",
    "issuerResponse": "frictionless"
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
      "href": "https://try.access.worldpay.com/api/payments/eyJrIjoiazNhYjYzMiIsImxpbmtWZXJzaW9uIjoiNS4wLjAifQ%3D%3D.sN%3Ag8wd64bwkbrp0md%2BbPxcanBnk2zLdsIqSa1pR99GeDrCwEtsymFb5gQw9WlrStDTK3eIWPy93y%3A7njc4649JSrU7%2BvFDl1J36%2BcwOkX0lW4Z%2BfnZKMutoUGX3m1%3Am1abCnrwHIBOLZ%3A8ZpsSaLoyDtB%3A8H%2BxSOOOGjEbko3O%3A%3A7gTMASwaw7KY3SuOCoh4KCq84ktTU7AB2kOFpTY0bs7pWRQKSZJKSFIJvAisP8cBzFPzqireuqfCu5ojcm60gRSsqS3glurO24RJkg5SrpRjgY6g7ca8uoA7tKDk9OVOIwORF5sGPHSSGMa2bEl2lMUkAANoWclQHiGzxWQQ3ZOMOj3ix5oo3ctSHv2uo5m6InByzI1XuTONS3N8O%2B1%2BuC8Xk67Ze0uAJk%2BrJN9o7Z%3AVhRHFzbbwymcuTiRbNw%3D"
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | Unauthorized | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 404 | Not found | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 406 | Not acceptable | [`HeaderErrorResponseError`](../../doc/models/header-error-response-error.md) |
| 415 | Unsupported media type | [`ErrorResponseError`](../../doc/models/error-response-error.md) |
| 500 | Internal server error | [`ErrorResponseError`](../../doc/models/error-response-error.md) |

