export enum EResponsive {
  IS_MOBILE = "isMobile",
  IS_TABLET = "isTablet",
  IS_SMALL_LAPTOP = "isSmallLaptop",
  IS_LAPTOP = "isLaptop",
  IS_DESKTOP = "isDesktop",
}

export interface IBreakpoints<T> {
  responsive: {
    [EResponsive.IS_MOBILE]: boolean;
    [EResponsive.IS_TABLET]: boolean;
    [EResponsive.IS_SMALL_LAPTOP]: boolean;
    [EResponsive.IS_LAPTOP]: boolean;
    [EResponsive.IS_DESKTOP]: boolean;
  };
  valueByBreakpoint?: T;
}
