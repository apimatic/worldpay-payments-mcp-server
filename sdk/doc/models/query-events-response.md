
# Query Events Response

## Structure

`QueryEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lastEvent` | `string \| undefined` | Optional | - |
| `actions` | [`QueryActionList \| undefined`](../../doc/models/query-action-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "lastEvent": "lastEvent6",
  "_actions": {
    "cancelPayment": {
      "href": "href4",
      "method": "method4"
    },
    "partiallySettlePayment": {
      "href": "href8",
      "method": "method0"
    },
    "settlePayment": {
      "href": "href4",
      "method": "method4"
    },
    "refundPayment": {
      "href": "href6",
      "method": "method2"
    },
    "partiallyRefundPayment": {
      "href": "href6",
      "method": "method2"
    }
  }
}
```

