import { defineStore } from "pinia";

export const useMyStore = defineStore("myStore", {
  state: () => {
    return {
      iphone: {
        iphone16: {
          name: "IPhone 16",
          curentColor: "Ultramarine",
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
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_black__ghc0maxm7y62_large.jpg",
            },
          },
          getImg() {
            switch (this.curentColor) {
              case "Ultramarine":
                return this.color.Ultramarine.link;

                break;
              case "Teal":
                return this.color.Teal.link;

                break;
              case "Pink":
                return this.color.Pink.link;

                break;
              case "White":
                return this.color.White.link;

                break;
              case "Black":
                return this.color.Black.link;

                break;
              default:
                alert("Нет таких значений");
            }
          },

          gpu: "",
        },
        iphone16Plus: {
          name: "IPhone 16 Plus",
          curentColor: "Ultramarine",
          color: {
            Ultramarine: {
              colorName: "Ultramarine",
              HEX: "#9aadf6",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_plus_ultramarine__fydahy2d5eie_large.jpg",
            },
            Teal: {
              colorName: "Teal",
              HEX: "#b0d4d2",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_plus_teal__e6cvx5f7la4i_large.jpg",
            },
            Pink: {
              colorName: "Pink",
              HEX: "#f2adda",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_plus_pink__f5f5vejd7x6y_large.jpg",
            },
            White: {
              colorName: "White",
              HEX: "#fafafa",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_plus_white__fy99gfk4w2ye_large.jpg",
            },
            Black: {
              colorName: "Black",
              HEX: "#3c4042",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_plus_black__fsk675tctwmm_large.jpg",
            },
          },
          getImg() {
            switch (this.curentColor) {
              case "Ultramarine":
                return this.color.Ultramarine.link;

                break;
              case "Teal":
                return this.color.Teal.link;

                break;
              case "Pink":
                return this.color.Pink.link;

                break;
              case "White":
                return this.color.White.link;

                break;
              case "Black":
                return this.color.Black.link;

                break;
              default:
                alert("Нет таких значений");
            }
          },

          gpu: "",
        },
        iPhone16Pro: {
          name: "IPhone 16 Pro",
          curentColor: "DesertTitanium",
          color: {
            DesertTitanium: {
              colorName: "DesertTitanium",
              HEX: "#bfa48f",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pro_desert_titanium__fj9ab0er3oya_large.jpg",
            },
            NaturalTitanium: {
              colorName: "NaturalTitanium",
              HEX: "#c2bcb2",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pro_natural_titanium__erz6n1pzmyky_large.jpg",
            },
            WhiteTitanium: {
              colorName: "WhiteTitanium",
              HEX: "#f2f1ed",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pro_white_titanium__cok27g38ea6a_large.jpg",
            },
            BlackTitanium: {
              colorName: "BlackTitanium",
              HEX: "#3c3c3d",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pro_black_titanium__ffs0ixp5spym_large.jpg",
            },
          },
          getImg() {
            switch (this.curentColor) {
              case "DesertTitanium":
                return this.color.DesertTitanium.link;

                break;
              case "NaturalTitanium":
                return this.color.NaturalTitanium.link;

                break;
              case "WhiteTitanium":
                return this.color.WhiteTitanium.link;

                break;
              case "BlackTitanium":
                return this.color.BlackTitanium.link;

              default:
                alert("Нет таких значений");
            }
          },

          gpu: "",
        },
        iphone16ProMax: {
          name: "IPhone 16 Pro Max",
          curentColor: "DesertTitanium",
          color: {
            DesertTitanium: {
              colorName: "DesertTitanium",
              HEX: "#bfa48f",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pro_max_desert_titanium__1afqmax19lui_large.jpg",
            },
            NaturalTitanium: {
              colorName: "NaturalTitanium",
              HEX: "#c2bcb2",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pro_max_natural_titanium__gazm86f4us2u_large.jpg",
            },
            WhiteTitanium: {
              colorName: "WhiteTitanium",
              HEX: "#f2f1ed",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pro_max_white_titanium__3gd4nclpggyi_large.jpg",
            },
            BlackTitanium: {
              colorName: "BlackTitanium",
              HEX: "#3c3c3d",
              link: "https://www.apple.com/v/iphone/compare/ah/images/overview/compare_iphone16_pro_max_black_titanium__dxz0z3mdtp26_large.jpg",
            },
          },
          getImg() {
            switch (this.curentColor) {
              case "DesertTitanium":
                return this.color.DesertTitanium.link;

                break;
              case "NaturalTitanium":
                return this.color.NaturalTitanium.link;

                break;
              case "WhiteTitanium":
                return this.color.WhiteTitanium.link;

                break;
              case "BlackTitanium":
                return this.color.BlackTitanium.link;

              default:
                alert("Нет таких значений");
            }
          },

          gpu: "",
        },
      },
      helpers: {
        showNavigation: false,
      },
    };
  },
  actions: {
    setShowNavigation() {
      this.helpers.showNavigation = !this.helpers.showNavigation;
    },
  },
});
