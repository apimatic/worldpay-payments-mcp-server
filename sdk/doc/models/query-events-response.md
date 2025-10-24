
# Query Events Response

*This model accepts additional fields of type unknown.*

## Structure

`QueryEventsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lastEvent` | `string \| undefined` | Optional | - |
| `actions` | [`QueryActionList \| undefined`](../../doc/models/query-action-list.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "lastEvent": "lastEvent6",
  "_actions": {
    "cancelPayment": {
      "href": "href4",
      "method": "method4",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "partiallySettlePayment": {
      "href": "href8",
      "method": "method0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "settlePayment": {
      "href": "href4",
      "method": "method4",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "refundPayment": {
      "href": "href6",
      "method": "method2",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "partiallyRefundPayment": {
      "href": "href6",
      "method": "method2",
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
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

