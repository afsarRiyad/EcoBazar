import card1 from '../assets/images/card1.webp'
import card2 from '../assets/images/card2.webp'
import card3 from '../assets/images/card3.webp'
import instapost1 from '../assets/images/instapost1.webp'
import instapost2 from '../assets/images/instapost2.webp'
import instapost3 from '../assets/images/instapost3.webp'
import instapost4 from '../assets/images/instapost4.webp'
import instapost5 from '../assets/images/instapost5.webp'
import instapost6 from '../assets/images/instapost6.webp'

export const blogPosts = [
  {
    id: 1,
    slug: 'citrus-season',
    title: 'Citrus Season',
    excerpt:
      'When the first blood oranges arrive, the kitchen slows down. A short guide to buying, keeping and serving winter citrus.',
    image: card1,
    date: '2025-11-18',
    category: 'Food',
    author: 'Admin',
    comments: 65,
    tags: ['Healthy', 'Fruit', 'Vitamins'],
    content: [
      'The market stalls turn amber and crimson before anything else changes. Blood oranges, mandarins and grapefruit arrive in shallow crates, and for a few weeks the kitchen smells of oil and zest rather than sugar.',
      'Choose fruit that feels heavy for its size and smells sweet at the stem. Keep it cool but never cold, and let it come back to room temperature before you cut it — the juice opens up and the bitterness softens.',
    ],
  },
  {
    id: 2,
    slug: 'slow-mornings',
    title: 'Slow Mornings',
    excerpt:
      'Sourdough, soft eggs and a table set without hurry. The quietest meal of the day deserves a little more attention.',
    image: card2,
    date: '2025-11-29',
    category: 'Healthy',
    author: 'Admin',
    comments: 65,
    tags: ['Breakfast', 'Low fat', 'Bread'],
    content: [
      'A good morning is rarely complicated. Bread toasted until it cracks, an egg cooked just past soft, and a pot of coffee left on the table instead of the counter.',
      'Set everything out before you sit down — salt in a small dish, butter at room temperature, fruit already sliced. The point is not the food, it is the ten unhurried minutes.',
    ],
  },
  {
    id: 3,
    slug: 'harvest-table',
    title: 'Harvest Table',
    excerpt:
      'A bowl built from what the garden gave up this week: bitter leaves, sweet roots, and a dressing sharp enough to hold them together.',
    image: card3,
    date: '2025-11-21',
    category: 'Recipes',
    author: 'Cameron Williamson',
    comments: 42,
    tags: ['Vegetarian', 'Dinner', 'Healthy'],
    content: [
      'There is no recipe for a harvest bowl, only a rhythm. Something raw and bitter, something roasted until sweet, something crunchy, and a dressing with enough acid to wake everything up.',
      'Build it in layers and season as you go. Grains first, then the warm vegetables, then leaves and herbs, and finally the dressing, spooned over rather than poured.',
    ],
  },
  {
    id: 4,
    slug: 'golden-hour',
    title: 'Golden Hour',
    excerpt:
      'Tomatoes taste different at the end of the day. Picked warm and eaten within hours, they need almost nothing.',
    image: instapost1,
    date: '2025-10-14',
    category: 'Organic',
    author: 'Admin',
    comments: 38,
    tags: ['Fruit', 'Healthy', 'Snacks'],
    content: [
      'Late afternoon is when the tomato rows smell strongest. The fruit is warm, the skins are tight, and the sugar has had a full day of sun to develop.',
      'Slice them thick, salt them early and let them sit until the juices pool. Olive oil, torn basil and a little black pepper are enough; anything more is decoration.',
    ],
  },
  {
    id: 5,
    slug: 'green-market',
    title: 'Green Market',
    excerpt:
      'Broccoli, cavolo nero and the rest of the brassicas: how to choose them, and why a hot pan beats a long boil.',
    image: instapost2,
    date: '2025-10-02',
    category: 'Healthy',
    author: 'Cameron Williamson',
    comments: 24,
    tags: ['Vegetarian', 'Healthy', 'Tiffin'],
    content: [
      'Brassicas announce themselves by weight and colour. Tight florets, stiff stems and deep green leaves are the signs of a vegetable that has not spent too long in transit.',
      'Cook them hard and fast. A dry pan, a little oil and four minutes of colour will do more for flavour than twenty minutes of steam.',
    ],
  },
  {
    id: 6,
    slug: 'fire-and-smoke',
    title: 'Fire & Smoke',
    excerpt:
      'Charred peppers, blistered skins and a little smoke in the kitchen. The oldest way to make vegetables taste like more.',
    image: instapost4,
    date: '2025-09-19',
    category: 'Food',
    author: 'Admin',
    comments: 51,
    tags: ['Dinner', 'Snacks', 'Vegetarian'],
    content: [
      'Charring does something no other cooking method does: it pushes sweetness forward and pulls bitterness back. Peppers and aubergines take to it best.',
      'Blacken them whole over an open flame, then trap the heat in a covered bowl so the skins loosen. Peel, salt, and finish with oil while they are still warm.',
    ],
  },
  {
    id: 7,
    slug: 'leaf-and-stem',
    title: 'Leaf & Stem',
    excerpt:
      'Wilted spinach, tender stems and a pan hotter than you think. A case for cooking greens in minutes.',
    image: instapost5,
    date: '2025-09-05',
    category: 'Healthy',
    author: 'Cameron Williamson',
    comments: 33,
    tags: ['Vegetarian', 'Healthy', 'Vitamins'],
    content: [
      'Greens are mostly water, which is why they collapse so quickly. That also means they cook in the time it takes to set the table.',
      'Wash them well, shake off the excess and cook in a wide pan with garlic and oil. Season at the end, never the beginning, or the leaves will weep.',
    ],
  },
  {
    id: 8,
    slug: 'summer-pantry',
    title: 'Summer Pantry',
    excerpt:
      'Zucchini, herbs and preserved lemon. The ingredients worth keeping within reach through the warm months.',
    image: instapost3,
    date: '2025-08-22',
    category: 'Recipes',
    author: 'Admin',
    comments: 19,
    tags: ['Vegetarian', 'Dinner', 'Snacks'],
    content: [
      'A summer pantry is small by design. Olive oil, good salt, a jar of preserved lemon and whatever herbs survived the week are usually enough.',
      'Zucchini is the most forgiving thing in the kitchen — ribbon it raw, grill it in planks, or cook it down slowly with onion until it turns sweet.',
    ],
  },
  {
    id: 9,
    slug: 'bright-water',
    title: 'Bright Water',
    excerpt:
      'Cold citrus, ice and a splash of soda. The easiest drink of the season, and the one guests remember.',
    image: instapost6,
    date: '2025-08-08',
    category: 'Lifestyle',
    author: 'Cameron Williamson',
    comments: 47,
    tags: ['Fruit', 'Kid foods', 'Healthy'],
    content: [
      'A jug of water is a small act of hospitality. Citrus, a handful of mint and enough ice to keep everything cold is the whole recipe.',
      'Muddle gently so the peel releases its oil without turning the drink bitter, and add the soda at the last moment so it still has bubbles at the table.',
    ],
  },
  {
    id: 10,
    slug: 'quiet-kitchen',
    title: 'Quiet Kitchen',
    excerpt:
      'Cooking alone, without a timer or a plan. Notes on the meals we make when nobody is watching.',
    image: card1,
    date: '2025-07-25',
    category: 'Lifestyle',
    author: 'Admin',
    comments: 28,
    tags: ['Breakfast', 'Low fat', 'Bread'],
    content: [
      'Some of the best meals happen when no one is coming over. A single pan, whatever is in the drawer, and no expectation of a photograph.',
      'This kind of cooking is a practice in attention rather than technique. Taste often, adjust as you go, and stop when it is good rather than when it is finished.',
    ],
  },
  {
    id: 11,
    slug: 'sunday-table',
    title: 'Sunday Table',
    excerpt:
      'A long lunch, one big dish and enough chairs for whoever turns up. The case for cooking less and sitting longer.',
    image: card2,
    date: '2025-07-11',
    category: 'Food',
    author: 'Cameron Williamson',
    comments: 56,
    tags: ['Meat', 'Dinner', 'Launch'],
    content: [
      'Sunday lunch works best when the menu is one dish, stretched. A roast chicken, a tray of vegetables, and bread to fill the gaps.',
      'Put everything in the middle of the table and let people serve themselves. The food matters less than the fact that no one has to leave.',
    ],
  },
  {
    id: 12,
    slug: 'root-and-bloom',
    title: 'Root & Bloom',
    excerpt:
      'Carrots, radishes and the first edible flowers of the season. A plate that looks like the garden it came from.',
    image: card3,
    date: '2025-06-27',
    category: 'Organic',
    author: 'Admin',
    comments: 31,
    tags: ['Vegetarian', 'Healthy', 'Fruit'],
    content: [
      'Roots and flowers are an unlikely pair on paper and an obvious one on the plate. Earthiness needs something bright and fragile beside it.',
      'Roast the roots until their edges caramelise, dress them while warm, and scatter the petals at the very last second so they do not wilt.',
    ],
  },
]

export const blogTags = [
  'Healthy',
  'Low fat',
  'Vegetarian',
  'Bread',
  'Kid foods',
  'Vitamins',
  'Snacks',
  'Meat',
  'Launch',
  'Dinner',
  'Tiffin',
  'Breakfast',
  'Fruit',
]

export const topCategories = [
  { name: 'Fresh Fruit', count: 34 },
  { name: 'Vegetables', count: 159 },
  { name: 'Cooking', count: 54 },
  { name: 'Snacks', count: 47 },
  { name: 'Beverages', count: 43 },
  { name: 'Beauty & Health', count: 38 },
  { name: 'Bread & Bakery', count: 15 },
]

export const blogGallery = [
  { image: instapost1, alt: 'Fresh vine tomatoes' },
  { image: instapost2, alt: 'Green leaf with water drops' },
  { image: instapost3, alt: 'Wet green leaves' },
  { image: instapost4, alt: 'Peppers splashing in water' },
  { image: instapost5, alt: 'Fresh spinach leaves' },
  { image: instapost6, alt: 'Fresh fruit on a table' },
]

export const articleBody = [
  'There is a particular pleasure in food that has not travelled far. It arrives with soil still on it, keeps for days rather than hours, and tastes of the place it was grown rather than the warehouse it passed through.',
  'We cook it simply, because that is the only honest way to treat something this good. A sharp knife, a hot pan and a little salt will carry most of the work — the rest is patience, and knowing when to stop.',
]

export const formatBlogDate = (iso) => {
  const date = new Date(`${iso}T00:00:00`)
  const day = String(date.getDate()).padStart(2, '0')
  const month = date.toLocaleString('en-US', { month: 'short' })
  const year = date.getFullYear()
  const label = date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

  return { day, month, year, label }
}

export const findPostBySlug = (slug) => blogPosts.find((post) => post.slug === slug)
