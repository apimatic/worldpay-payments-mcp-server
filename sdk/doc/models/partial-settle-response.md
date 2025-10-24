
# Partial Settle Response

*This model accepts additional fields of type unknown.*

## Structure

`PartialSettleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | [`Outcome \| undefined`](../../doc/models/outcome.md) | Optional | - |
| `links` | [`PaymentsLink \| undefined`](../../doc/models/payments-link.md) | Optional | Return details about the status of the payment |
| `actions` | [`PartialSettleActionList \| undefined`](../../doc/models/partial-settle-action-list.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "sentForRefund",
  "_links": {
    "self": {
      "href": "href0",
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
  "_actions": {
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
    "partiallySettlePayment": {
      "href": "href8",
      "method": "method0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "cancelPayment": {
      "href": "href4",
      "method": "method4",
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

