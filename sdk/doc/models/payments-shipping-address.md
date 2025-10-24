
# Payments Shipping Address

## Structure

`PaymentsShippingAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address1` | `string` | Required | Address line 1<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `80` |
| `address2` | `string \| undefined` | Optional | Address line 2<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `80` |
| `address3` | `string \| undefined` | Optional | Address line 3<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `80` |
| `postalCode` | `string` | Required | Address PostalCode<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `15` |
| `city` | `string` | Required | Address City<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `state` | `string \| undefined` | Optional | Address State<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `30` |
| `countryCode` | `string` | Required | The supported ISO 3166-1 alpha-2 country code |

## Example (as JSON)

```json
{
  "address1": "address12",
  "address2": "address22",
  "address3": "address30",
  "postalCode": "postalCode8",
  "city": "city0",
  "state": "state4",
  "countryCode": "countryCode4"
}
```

