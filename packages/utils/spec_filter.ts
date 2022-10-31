/*
 * @Author: william89turner william.turner.89@mail.ru
 * @Date: 2022-10-31 18:08:12
 * @LastEditors: william89turner william.turner.89@mail.ru
 * @LastEditTime: 2022-10-31 18:13:19
 * @FilePath: /solib/scripts/spec_filter.ts
 * @Description: Supper Man Day Day Up!
 */
import { Suite } from 'mocha';

export function specFilter(skips?: string[]) {
  let set = new Set(skips);
  return function (title: string, suite: (this: Suite) => void) {
    set.has(title) || describe(title, suite);
  };
}
