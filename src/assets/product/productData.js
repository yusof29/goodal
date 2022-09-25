import tangerineData from "./tangerine/tangerineData";
import appleData from "./apple/appleData";
import leafData from "./leaf/leafData";

export const productData = [
  {
    id: 1,
    name: "Vitamin C Serum",
    category: "tangerine",
    price: "$24.00",
    image: tangerineData.tangerine1,
    image2: tangerineData.tangerine1_hover,
  },
  {
    id: 2,
    name: "Vitamin C Toner Pads",
    category: "tangerine",
    price: "$24.00",
    image: tangerineData.tangerine2,
    image2: tangerineData.tangerine2_hover,
  },
  {
    id: 3,
    name: "Clearing Toner Pads",
    category: "apple",
    price: "$20.00",
    image: appleData.apple1,
    image2: appleData.apple1_hover,
  },
  {
    id: 4,
    name: "Clearing Ampoule",
    category: "apple",
    price: "$22.00",
    image: appleData.apple2,
    image2: appleData.apple2_hover,
    description: {
      span1: "give your skin the reset it needss:",
      p1: "Our Apple AHA Clearing Ampoule resets your skin from the inside, out. Our ampoule is a leave-on treatment that helps your skin exfoliate and restore its balanced glow by waking up the inner layers of your skin. The natural ingredients work together to clean up dead skin cells, help fight visible blemishes, reduce the look of pores, and improve the look of skin texture",

      span2: "natural aha from real apples:",
      p2: "Our ampoule contains 79% apple extract and a low dose of AHA (1%). The malic acids from Jonathan Apples is what allows us to keep the chemical exfoliant dosage so low. This is the secret to a safe serum that you can use on a daily basis! Not only does the ampoule exfoliate, but it also reduces the size of enlarged pores and soothes inflamed skin. All without irritations!",

      span3: "safe formula for gentle peeling:",
      p3: "Our Apple AHA Clearing Ampoule offers the safest formula by using natural acids derived from real apples and low dosages of AHA to suit all skin types. Its light texture will absorb quickly into your skin. Our ampoule is certified as non-irritating and gentle enough for both AM and PM use.",

      span4: "how to use:",
      p4: "Immediately after toning, apply an appropriate amount of serum on your face. Start by using 3 times a week and slowly increase the frequency to your liking.",

      span5: "better together:",
      p5: "See enhanced results by pairing up with other products in our Apple AHA Clearing line",
    },
  },
  {
    id: 5,
    name: "Clearing Toner",
    category: "apple",
    price: "$18.00",
    image: appleData.apple3,
    image2: appleData.apple3_hover,
  },
  {
    id: 6,
    name: "Calming Essence",
    category: "leaf",
    price: "$30.00",
    image: leafData.leaf1,
    image2: leafData.leaf1_hover,
  },
  {
    id: 7,
    name: "Calming Cream",
    category: "leaf",
    price: "$24.00",
    image: leafData.leaf2,
    image2: leafData.leaf2_hover,
  },
  {
    id: 8,
    name: "Calming Essence",
    category: "leaf",
    price: "$17.00",
    image: leafData.leaf3,
    image2: leafData.leaf3_hover,
  },
];
