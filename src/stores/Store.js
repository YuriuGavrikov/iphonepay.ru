import { defineStore } from "pinia";

import { NIcon } from "naive-ui";
import { PhonePortraitOutline as iphone } from "@vicons/ionicons5";

import { h } from "vue";

function renderIcon(icon) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
}

export const useMyStore = defineStore("myStore", {
  state: () => {
    return {
      optionsIphone: [
        {
          label: "iPhone 16",
          key: "iPhone16",
          icon: renderIcon(iphone),
        },
        {
          label: "iPhone 16 Pro",
          key: "iPhone16Pro",
          icon: renderIcon(iphone),
        },
        {
          label: "iPhone 16 Pro Max",
          key: "iPhone16ProMax",
          icon: renderIcon(iphone),
        },
      ],
      optionsAirpods: [
        {
          label: "Здесь пока ничего нет",
          key: "",
          icon: renderIcon(iphone),
        },
      ],
      optionsIpad: [
        {
          label: "Здесь пока ничего нет",
          key: "",
          icon: renderIcon(iphone),
        },
      ],
      iphone: {
        iphone16: {
          name: "IPhone 16",
          color: {
            Ultramarine: {
              colorName: "Ultramarine",
              HEX: "#9aadf6",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_ultramarine__mo52tfjb7fmi_large.jpg",
            },
            Teal: {
              colorName: "Teal",
              HEX: "#b0d4d2",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_teal__e8d1m1vvbsqe_large.jpg",
            },
            Pink: {
              colorName: "Pink",
              HEX: "#f2adda",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pink__cc4slzr1gzte_large.jpg",
            },
            White: {
              colorName: "White",
              HEX: "#fafafa",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_white__gjb82vhi5be6_large.jpg",
            },
            Black: {
              colorName: "Black",
              HEX: "#3c4042",
              linkImg:
                "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_black__ghc0maxm7y62_large.jpg",
            },
          },

          gpu: "",
        },
        iPhone16Pro: {
          name: "IPhone 16 Pro",
          color: {
            Ultramarine: {
              colorName: "Ultramarine",
              HEX: "#9aadf6",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_ultramarine__mo52tfjb7fmi_large.jpg",
            },
            Teal: {
              colorName: "Teal",
              HEX: "#b0d4d2",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_teal__e8d1m1vvbsqe_large.jpg",
            },
            Pink: {
              colorName: "Pink",
              HEX: "#f2adda",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pink__cc4slzr1gzte_large.jpg",
            },
            White: {
              colorName: "White",
              HEX: "#fafafa",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_white__gjb82vhi5be6_large.jpg",
            },
            Black: {
              colorName: "Black",
              HEX: "#3c4042",
              linkImg:
                "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_black__ghc0maxm7y62_large.jpg",
            },
          },
          gpu: "",
        },
        iphone16ProMax: {
          name: "IPhone 16 Pro Max",
          color: {
            Ultramarine: {
              colorName: "Ultramarine",
              HEX: "#9aadf6",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_ultramarine__mo52tfjb7fmi_large.jpg",
            },
            Teal: {
              colorName: "Teal",
              HEX: "#b0d4d2",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_teal__e8d1m1vvbsqe_large.jpg",
            },
            Pink: {
              colorName: "Pink",
              HEX: "#f2adda",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pink__cc4slzr1gzte_large.jpg",
            },
            White: {
              colorName: "White",
              HEX: "#fafafa",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_white__gjb82vhi5be6_large.jpg",
            },
            Black: {
              colorName: "Black",
              HEX: "#3c4042",
              linkImg:
                "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_black__ghc0maxm7y62_large.jpg",
            },
          },
          gpu: "",
        },
        iphone16Plus: {
          name: "IPhone 16 Plus",
          color: {
            Ultramarine: {
              colorName: "Ultramarine",
              HEX: "#9aadf6",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_ultramarine__mo52tfjb7fmi_large.jpg",
            },
            Teal: {
              colorName: "Teal",
              HEX: "#b0d4d2",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_teal__e8d1m1vvbsqe_large.jpg",
            },
            Pink: {
              colorName: "Pink",
              HEX: "#f2adda",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pink__cc4slzr1gzte_large.jpg",
            },
            White: {
              colorName: "White",
              HEX: "#fafafa",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_white__gjb82vhi5be6_large.jpg",
            },
            Black: {
              colorName: "Black",
              HEX: "#3c4042",
              linkImg:
                "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_black__ghc0maxm7y62_large.jpg",
            },
          },
          gpu: "",
        },
      },

      user: { userName: "", userPassword: "", isLogin: false },
      curentCity: {
        city: "",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis adipisci vitae voluptate possimus rem laudantium dignissimos ab, totam velit beatae eum dolorem labore unde ducimus, nisi odio eius nesciunt non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis adipisci vitae voluptate possimus rem laudantium dignissimos ab, totam velit beatae eum dolorem labore unde ducimus, nisi odio eius nesciunt non!",
      },
    };
  },
  actions: {
    setUser(name, password) {
      this.user.userName = name;
      this.user.userPassword = password;
      this.user.isLogin = true;
    },
    exitUser() {
      this.user.userName = "";
      this.user.userPassword = "";
      this.user.isLogin = false;
    },
    setCurentCity(city) {
      this.curentCity.city = city;
    },
  },
});
