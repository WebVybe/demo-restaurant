// Lemongrass & Lime: a fictional Vietnamese restaurant created for
// WebVybe's portfolio demo. There is no real business behind this
// content; it exists to show how WebVybe would build a real Vietnamese
// restaurant's site. Keep prices and copy internally consistent if this
// file is edited.

export const restaurant = {
  name: 'Lemongrass & Lime',
  tagline: 'Vietnamese comfort food, bowl by bowl.',
  neighborhood: 'Linda Vista, San Diego',
  address: '6965 Linda Vista Rd, San Diego, CA 92111',
  phone: '(619) 555-0142',
  phoneHref: 'tel:+16195550142',
  email: 'hello@lemongrassandlime.com',
  eventsEmail: 'events@lemongrassandlime.com',
  instagram: '@lemongrassandlime',
  founderName: 'Mai Tran',
  founded: 2019,
  featureItem: {
    name: 'Bún Chả Hà Nội',
    blurb:
      "This month's special: grilled pork patties and vermicelli, the way Mai's mother made it in Hanoi.",
    cadence: 'Rotates monthly, while the specific cut lasts.',
  },
  privateEventNotice:
    "We ask for at least two weeks' notice on private dining and catering orders, because our broth and marinated meats are prepped a full day ahead for everything we serve.",
}

export const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '11:00am – 9:00pm' },
  { day: 'Wednesday', time: '11:00am – 9:00pm' },
  { day: 'Thursday', time: '11:00am – 9:00pm' },
  { day: 'Friday', time: '11:00am – 9:30pm' },
  { day: 'Saturday', time: '11:00am – 9:30pm' },
  { day: 'Sunday', time: '11:00am – 8:30pm' },
]

export type MenuItem = {
  name: string
  price: string
  description: string
  badge?: string
}

export type MenuCategory = {
  id: string
  title: string
  intro: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'pho',
    title: 'Phở & Noodle Bowls',
    intro: 'Beef and chicken broths simmered 12+ hours, finished table-side with herbs and lime.',
    items: [
      {
        name: 'Phở Bò Tái',
        price: '$15.00',
        description: 'Beef broth, rare steak, brisket, rice noodles — our original bowl since 2019.',
        badge: 'Best Seller',
      },
      {
        name: 'Phở Gà',
        price: '$14.00',
        description: 'Clear chicken broth, shredded chicken, rice noodles, scallion.',
      },
      {
        name: 'Bún Bò Huế',
        price: '$16.00',
        description: "Spicy lemongrass beef broth from Mai's mother's recipe, pork knuckle, chả lụa.",
        badge: 'Spicy',
      },
      {
        name: 'Bún Chả Hà Nội',
        price: '$16.50',
        description: 'Grilled pork patties and vermicelli with herbs and nước chấm.',
        badge: "Chef's Pick",
      },
      {
        name: 'Hủ Tiếu Nam Vang',
        price: '$15.50',
        description: 'Clear pork broth, shrimp, quail egg, thin rice noodles — a Saigon classic.',
      },
    ],
  },
  {
    id: 'banhmi',
    title: 'Bánh Mì & Rice Plates',
    intro: 'Crusty baguettes baked daily and rice plates grilled over charcoal.',
    items: [
      {
        name: 'Bánh Mì Thịt Nướng',
        price: '$10.00',
        description: 'Grilled pork, pickled carrot & daikon, cilantro, jalapeño, pâté, toasted baguette.',
        badge: 'Best Seller',
      },
      {
        name: 'Bánh Mì Chay',
        price: '$9.50',
        description: 'Marinated tofu and mushroom, same pickles and herbs, vegetarian.',
      },
      {
        name: 'Cơm Sườn Nướng',
        price: '$15.50',
        description: 'Charcoal-grilled pork chop over broken rice, fried egg, pickled vegetables.',
      },
      {
        name: 'Cơm Gà Nướng Sả',
        price: '$15.00',
        description: 'Lemongrass-grilled chicken thigh over rice, scallion oil, cucumber.',
      },
      {
        name: 'Cơm Tấm Đặc Biệt',
        price: '$17.00',
        description: 'Grilled pork chop, shredded pork skin, steamed egg cake, over broken rice.',
        badge: 'Combo',
      },
    ],
  },
  {
    id: 'rolls',
    title: 'Starters & Rolls',
    intro: 'Small plates made fresh to order, rolled and fried in-house every morning.',
    items: [
      {
        name: 'Gỏi Cuốn Tôm Thịt',
        price: '$8.00',
        description: 'Shrimp and pork summer rolls, rice vermicelli, herbs, peanut hoisin sauce.',
        badge: 'Best Seller',
      },
      {
        name: 'Chả Giò',
        price: '$8.50',
        description: 'Crispy fried pork and vegetable spring rolls, lettuce wrap, nước chấm.',
      },
      {
        name: 'Gỏi Đu Đủ Khô Bò',
        price: '$9.00',
        description: 'Green papaya salad, dried beef, roasted peanuts, Thai basil.',
      },
      {
        name: 'Bánh Xèo',
        price: '$12.00',
        description: 'Crispy turmeric crepe, shrimp, pork, bean sprouts, wrapped in lettuce and herbs.',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    intro: 'Vietnamese coffee brewed to order and fresh fruit drinks, no syrups from a bottle.',
    items: [
      {
        name: 'Cà Phê Sữa Đá',
        price: '$5.00',
        description: 'Dark-roast drip coffee, sweetened condensed milk, over ice.',
        badge: 'Best Seller',
      },
      {
        name: 'Cà Phê Trứng',
        price: '$6.00',
        description: 'Whipped egg yolk and condensed milk over Vietnamese coffee — a Hanoi specialty.',
      },
      {
        name: 'Trà Tắc',
        price: '$4.00',
        description: 'Vietnamese calamansi iced tea, lightly sweetened.',
      },
      {
        name: 'Sinh Tố Bơ',
        price: '$6.50',
        description: 'Avocado smoothie, condensed milk, ice — dessert and drink in one.',
      },
      {
        name: 'Nước Mía',
        price: '$5.00',
        description: 'Fresh-pressed sugarcane juice with a splash of lime.',
      },
    ],
  },
]

export const groupDining = {
  name: 'Family-Style Group Dining',
  price: 'From $28/person',
  bullets: [
    'Private dining room seats up to 20, no rental fee with a $400 food minimum',
    'Family-style set menus for 6 or more: choose 4 shared dishes plus rice',
    "Two weeks' notice for parties of 10+",
    'Add a build-your-own phở bar for $6/person',
  ],
}

export const faqs = [
  {
    q: 'Do you take reservations, or is it walk-in only?',
    a: 'We hold tables for parties of 6 or more with a reservation; smaller parties are walk-in, first come first served. Use the contact form for parties of 6+ and we\'ll confirm by email or text.',
  },
  {
    q: 'Is the broth gluten-free? Do you have vegetarian options?',
    a: 'Our beef and chicken phở broths are naturally gluten-free, but our bánh mì bread and a few sauces contain gluten, so ask your server if that matters to you. Bánh Mì Chay and a vegetable broth phở are both fully vegetarian.',
  },
  {
    q: 'How spicy is the food? Can I ask for it mild?',
    a: "Bún Bò Huế is the only dish that arrives spicy by default; everything else is served mild with chili and sriracha on the table so you add your own heat. Just ask your server and we'll adjust any dish.",
  },
  {
    q: 'Do you do takeout?',
    a: "Yes — order ahead through the contact form, pick a pickup day and time, and it'll be ready at the counter. We don't currently run our own delivery, but we're listed on the major delivery apps.",
  },
  {
    q: 'Is there parking?',
    a: 'Free parking lot behind the building, shared with the strip it sits in on Linda Vista Rd.',
  },
  {
    q: 'Do you cater or host private events?',
    a: "Yes: family-style set menus, noodle and rice trays for drop-off catering, and a private dining room for up to 20. Email events@lemongrassandlime.com or use the contact form with headcount and date and we'll send a quote.",
  },
]
