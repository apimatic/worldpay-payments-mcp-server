
# Device Data Request

*This model accepts additional fields of type unknown.*

## Structure

`DeviceDataRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `collectionReference` | `string \| undefined` | Optional | Add the `sessionId` provided in the [postMessage for the device data collection form (web)](/products/payments/enable-features/3ds-authentication/web) or for native (iOS/Android), returned as `consumerSessionId` as part of [SDK initialization](/products/payments/enable-features/3ds-authentication/android-ios). <br><br>__Note:__ If device data collection fails you can attempt the payment without this value, but you will see an increased number of `challenged` and even `authenticationFailed` outcomes, if this happens for a lot of requests. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "collectionReference": "collectionReference6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

