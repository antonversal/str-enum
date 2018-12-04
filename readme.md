String enum
===========

Example:

```ts
import { strEnum } from '@join-com/str-enum'

export const BAR = strEnum(['foo', 'bar'])
export type BAR = keyof typeof BAR
```
