# swagger

## parameters



```
parameters:
- in: path
  name: userId
  schema:
    type: integer
  required: true
  description: Numeric ID of the user to get

- in: query
  name: offset
  schema:
    type: integer
  description: The number of items to skip before starting to collect the result set

- in: header
  name: X-Request-ID
  schema:
    type: string
    format: uuid
  required: true

- in: cookie
  name: debug
  schema:
    type: integer
    enum: [0, 1]
    default: 0

- in: formData
  name: username
  description: Second file name.
  required: true

- in: body
  name: username
  description: Second file name.
  required: true
```