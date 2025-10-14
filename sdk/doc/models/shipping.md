
# Shipping

*This model accepts additional fields of type unknown.*

## Structure

`Shipping`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `method` | [`Method \| undefined`](../../doc/models/method.md) | Optional | The shipping method used. |
| `timeFrame` | [`TimeFrame \| undefined`](../../doc/models/time-frame.md) | Optional | - |
| `email` | `string \| undefined` | Optional | The email address used for an electronic delivery.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128`, *Pattern*: `^.+@.+$` |
| `phone` | `string \| undefined` | Optional | The phone number used for delivery.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `20`, *Pattern*: `^[0-9]*$` |
| `firstName` | `string \| undefined` | Optional | First name used on the shipping address.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22` |
| `lastName` | `string \| undefined` | Optional | Last name used on the shipping address.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22` |
| `address` | [`PaymentsShippingAddress \| undefined`](../../doc/models/payments-shipping-address.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "method": "store",
  "timeFrame": "electronic",
  "email": "email4",
  "phone": "phone2",
  "firstName": "firstName2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

