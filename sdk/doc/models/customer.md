
# Customer

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerId` | `string \| undefined` | Optional | Unique identifier used by the ecommerce system for the customer.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128` |
| `firstName` | `string \| undefined` | Optional | Customer's first name.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22` |
| `lastName` | `string \| undefined` | Optional | Customer's last name.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `22` |
| `phone` | `string \| undefined` | Optional | Customer's phone number.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `20`, *Pattern*: `^[0-9]*$` |
| `dateOfBirth` | `string \| undefined` | Optional | Customer's date of birth. |
| `email` | `string \| undefined` | Optional | Customers's email address used for the ecommerce account.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `128`, *Pattern*: `^.+@.+$` |
| `ipAddress` | `string \| undefined` | Optional | A unique identifier for your customer's physical location that<br>can be used by the issuer in risk analysis. Must be in IPv4 or IPv6 format.<br>E.g. 192.0.0.0. |
| `documentReference` | `string \| undefined` | Optional | Required for domestic processing in some Latin American countries.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50`, *Pattern*: `^[-A-Za-z0-9_\-/\\*~+.,&()]*$` |

## Example (as JSON)

```json
{
  "customerId": "customerId2",
  "firstName": "firstName6",
  "lastName": "lastName2",
  "phone": "phone2",
  "dateOfBirth": "2016-03-13T12:52:32.123Z"
}
```

