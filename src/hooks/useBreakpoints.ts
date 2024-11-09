import { useMediaQuery, useTheme } from "@mui/material";
import { EResponsive, IBreakpoints } from "@/types/HooksType";
import { useMemo } from "react";

interface IProps<T> {
  valueOnBreakpoints?: {
    xs: T;
    sm: T;
    md: T;
    lg: T;
    xl: T;
  };
}

/**
 * `useBreakpoints` là một custom hook dùng để xác định breakpoint hiện tại dựa trên kích thước màn hình và
 * trả về giá trị tương ứng từ `valueOnBreakpoints` dựa trên breakpoint hiện tại, nếu có cung cấp.
 *
 * @template T - Kiểu dữ liệu chung cho giá trị tại mỗi breakpoint.
 *
 * @param {IProps<T>} [options] - Đối tượng chứa giá trị cho từng breakpoint, bao gồm:
 *   - `xs`: Giá trị cho breakpoint `xs` (0px - 600px).
 *   - `sm`: Giá trị cho breakpoint `sm` (600px - 900px).
 *   - `md`: Giá trị cho breakpoint `md` (900px - 1200px).
 *   - `lg`: Giá trị cho breakpoint `lg` (1200px - 1536px).
 *   - `xl`: Giá trị cho breakpoint `xl` (1536px trở lên).
 *   Nếu `options` không được cung cấp hoặc không có `valueOnBreakpoints`, giá trị trả về `valueByBreakpoint` sẽ là `undefined`.
 *
 * @returns {IBreakpoints<T>} Một đối tượng chứa:
 *   - `responsive`: Một đối tượng boolean cho biết trạng thái của từng breakpoint hiện tại:
 *     - `IS_MOBILE`: `true` nếu đang ở breakpoint `xs`.
 *     - `IS_TABLET`: `true` nếu đang ở breakpoint `sm`.
 *     - `IS_SMALL_LAPTOP`: `true` nếu đang ở breakpoint `md`.
 *     - `IS_LAPTOP`: `true` nếu đang ở breakpoint `lg`.
 *     - `IS_DESKTOP`: `true` nếu đang ở breakpoint `xl`.
 *   - `valueByBreakpoint`: Giá trị từ `valueOnBreakpoints` tương ứng với breakpoint hiện tại, hoặc `undefined` nếu `options` không được cung cấp hoặc không chứa `valueOnBreakpoints`.
 *
 * @example
 * ```tsx
 * const { responsive, valueByBreakpoint } = useBreakpoints({
 *   valueOnBreakpoints: {
 *     xs: "Mobile View",
 *     sm: "Tablet View",
 *     md: "Small Laptop View",
 *     lg: "Laptop View",
 *     xl: "Desktop View",
 *   }
 * });
 *
 * console.log(responsive.IS_MOBILE); // true nếu đang ở breakpoint xs
 * console.log(valueByBreakpoint); // Giá trị tương ứng với breakpoint hiện tại, ví dụ: "Mobile View" nếu ở xs
 * ```
 */
export const useBreakpoints = <T>(options?: IProps<T>): IBreakpoints<T> => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.only("sm"));
  const isSmallLaptop = useMediaQuery(theme.breakpoints.only("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.only("lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.only("xl"));

  const responsive = {
    [EResponsive.IS_MOBILE]: isMobile,
    [EResponsive.IS_TABLET]: isTablet,
    [EResponsive.IS_SMALL_LAPTOP]: isSmallLaptop,
    [EResponsive.IS_LAPTOP]: isLaptop,
    [EResponsive.IS_DESKTOP]: isDesktop,
  };

  const valueByBreakpoint = useMemo(() => {
    if (!options || !options.valueOnBreakpoints) return undefined;

    const { xs, sm, md, lg, xl } = options.valueOnBreakpoints;
    if (isMobile) return xs;
    if (isTablet) return sm;
    if (isSmallLaptop) return md;
    if (isLaptop) return lg;
    if (isDesktop) return xl;
  }, [isMobile, isTablet, isSmallLaptop, isLaptop, isDesktop, options]);

  return {
    responsive,
    valueByBreakpoint,
  };
};
