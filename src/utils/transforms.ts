export const instagramTranforms = (index: number) => {
  switch (index) {
    case 0:
      return [{ translateY: -20 }, { translateX: 10 }, { rotate: "15deg" }];
    case 1:
      return [{ translateY: -10 }, { translateX: -10 }, { rotate: "-10deg" }];
    case 2:
      return [{ translateY: 20 }, { translateX: -10 }, { rotate: "5deg" }];
    case 3:
      return [{ translateY: 30 }, { translateX: 20 }, { rotate: "-5deg" }];
    case 4:
      return [{ translateY: 10 }, { translateX: 10 }, { rotate: "10deg" }];
    default:
      return [];
  }
};
