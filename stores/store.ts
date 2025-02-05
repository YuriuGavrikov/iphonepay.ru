export const useMyStore = defineStore("myStore", {
  state: () => {
    return {
      navigation: {
        isShowNavigation: true,
      },
    };
  },
  actions: {
    setShowNavigation() {
      this.navigation.isShowNavigation = !this.navigation.isShowNavigation;
    },
  },
});
