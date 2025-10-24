
# Partial Refund Response

*This model accepts additional fields of type unknown.*

## Structure

`PartialRefundResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outcome` | [`Outcome \| undefined`](../../doc/models/outcome.md) | Optional | - |
| `links` | [`PaymentsLink \| undefined`](../../doc/models/payments-link.md) | Optional | Return details about the status of the payment |
| `actions` | [`PartialRefundActionList \| undefined`](../../doc/models/partial-refund-action-list.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "outcome": "authorized",
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

