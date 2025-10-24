
# Shipping

## Structure

`Shipping`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `method` | [`MethodEnum \| undefined`](../../doc/models/method-enum.md) | Optional | The shipping method used. |
| `timeFrame` | [`TimeFrameEnum \| undefined`](../../doc/models/time-frame-enum.md) | Optional | - |
| `email` | `string \| undefined` | Optional | The email address used for an electronic delivery.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128`, *Pattern*: `^.+@.+$` |
| `phone` | `string \| undefined` | Optional | The phone number used for delivery.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `20`, *Pattern*: `^[0-9]*$` |
| `firstName` | `string \| undefined` | Optional | First name used on the shipping address.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22` |
| `lastName` | `string \| undefined` | Optional | Last name used on the shipping address.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22` |
| `address` | [`PaymentsShippingAddress \| undefined`](../../doc/models/payments-shipping-address.md) | Optional | - |

## Example (as JSON)

```json
{
  "method": "store",
  "timeFrame": "electronic",
  "email": "email4",
  "phone": "phone2",
  "firstName": "firstName2"
}
```

