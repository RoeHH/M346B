export * from "https://raw.githubusercontent.com/lucacasonato/fresh/dd2548a322293e6029bc298f96767a7c03bb1d7e/runtime.ts";
import { IS_BROWSER } from "https://raw.githubusercontent.com/lucacasonato/fresh/main/runtime.ts";
import { apply, setup, tw } from "https://esm.sh/twind@0.16.16";
import * as colors from "https://esm.sh/twind@0.16.16/colors";
export { apply, setup, tw };
export const theme = {
  colors: {
    black: colors.black,
    gray: colors.gray,
    green: colors.green,
    white: colors.white,
    yellow: colors.yellow,
    indigo: colors.indigo,
    red: colors.red,
  },
};
if (IS_BROWSER) {
  setup({ theme: { colors } });
}