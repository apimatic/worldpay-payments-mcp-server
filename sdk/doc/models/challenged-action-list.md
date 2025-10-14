
# Challenged Action List

*This model accepts additional fields of type unknown.*

## Structure

`ChallengedActionList`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `complete3DsChallenge` | [`PaymentsActionComplete3DsChallenge \| undefined`](../../doc/models/payments-action-complete-3-ds-challenge.md) | Optional | Resume the payment following the 3DS challenge being completed by the customer. See [details](../3ds-actions/complete3dschallenge) |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "complete3dsChallenge": {
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
}
```

