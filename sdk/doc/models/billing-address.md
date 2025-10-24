
# Billing Address

Contains the billing address information.

## Structure

`BillingAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address1` | `string` | Required | Address line 1<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `80` |
| `address2` | `string \| undefined` | Optional | Address line 2<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `80` |
| `address3` | `string \| undefined` | Optional | Address line 3<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `80` |
| `postalCode` | `string \| undefined` | Optional | Required for all countries except the following:            * IE<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `15` |
| `city` | `string` | Required | Address City<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `state` | `string \| undefined` | Optional | Address State<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `30` |
| `countryCode` | `string` | Required | Must be provided in [ISO 3166-1 alpha-2 format](/products/reference/supported-countries-currencies#iso-country-codes). |

## Example (as JSON)

```json
{
  "address1": "address14",
  "address2": "address28",
  "address3": "address36",
  "postalCode": "postalCode8",
  "city": "city6",
  "state": "state2",
  "countryCode": "countryCode8"
}
```

