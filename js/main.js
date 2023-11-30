const IMAGE_COUNT = 25;
const LIKE = {
  MIN: 15,
  MAX: 200
};
const AVATAR = {
  MIN: 1,
  MAX: 6
};
const MESSAGES = {
  MIN: 1,
  MAX: 6
};
const MESSAGES_VALUE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Я не слежу за тенденциями, я их устанавливаю',
  'Наедине с природой #nature #freedom #peace',
  'В конце грозы всегда появляется радуга',
  'Лучший день! #happy #bestdayever',
  'Выходные с близкими #friends',
  'Всем рекомендую эту кофейню! Лучшая, в которой была за последнее время!! #bestcoffee #coffeeshop',
  'Напишите в комментариях свой любимый фильм :) #needsomethingtowatch #recommendations #movie #watch',
  'Хочу вернуться в тот день :( #wannagoback #tbt #sun #sea #travel #travelgram'
];
const NAMES = ['Мария', 'Александр', 'Алексей', 'Игорь', 'Арина', 'Регина', 'Михаил', 'Виктория'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createId = () => {
  let id = 0;

  return () => {
    id += 1;
    return id;
  };
};

const getCommentId = createId();

const createMessage = () => Array.from({length: getRandomInteger}, () => getRandomArrayElement(MESSAGES_VALUE)).join(' ');

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(AVATAR)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createImage = (index) => ({
  id: index,
  url: 'photos/{index}.jpg',
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE),
  comments: Array.from({ length: getRandomInteger(MESSAGES)}, createComment)
});

const images = Array.from({length: IMAGE_COUNT}, (_, i) => createImage(i));

images();
