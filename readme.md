# twitch-embed-ts

![Logo](logo.png)

### Typescript Wrapper для Twitch Embed плеера / чата, основаный на [twitch embed API](https://dev.twitch.tv/docs/embed/)

# Установка 
```bash
npm i @anivire/twitch-embed-ts
# or
yarn add @anivire/twitch-embed-ts
```

# Использование
Обязательно для начала добавьте оффициальный скрипт Twitch Embed или Player в ваш `index.html`:
```html
<script src="https://embed.twitch.tv/embed/v1.js"></script>
<!-- OR / AND -->
<script src="https://player.twitch.tv/embed/v1.js"></script>
```

### Создание нового экземпляра Twitch Embed

`TwitchEmbed` позволяет встраивать всё, включая плеер и/или чат. Он также содержит `TwitchPlayer`, с которым можно взаимодействовать вызвав `embed.getPlayer()`

```ts
const embed = new TwitchEmbed(
    'twitch-embed', 
    options: {
        width: '1280',
        height: '720',
        channel: 'anivire_',
        parent: ['anivire.xyz']
    });
```

1. В этом примере первый аргумент `twitch-embed` является идентификатором для `<div>` в который будет встраиваться плеер Twitch в виде `<iframe>`. 

2. Вторым аргументом является объект с настройками плеера, которые включают обязательные параметры ширины, высоты плеера и канал / видео / коллекция, где канал имеет высший приоритет, что означает если указан и канал и видео, то использовать будет канал (прямая трансляция). 

    Дополнительно вместо числового значения высота и ширины вы можете указать процентный размер, например `100%`.

    Важно также указать в `parent` домен, на котором будет размещаться ваш плеер, для корректной работы плеера.

    Список остальных параметров настроек плеера можете посмотреть на [вики](#).


### Создание нового экземпляра Twitch Player

`TwitchPlayer` позволяет встраивать только плеер, без чата.

```ts
const player = new TwitchPlayer(
    'twitch-player', 
    options: {
        width: '1280',
        height: '720',
        video: '2064229582',
        parent: ['anivire.xyz']
    });
```

### Реагирование на события

```ts
player.addEventListener(TwitchPlayerEvents.READY, () => {
    console.info('Twitch Player is ready to work!')
});
```

Список остальных типов событий можете посмотреть на [вики](#).

### Взаимодействие с плеером

```ts
// Установка громкости плеера
player.setVolume(0.45);

// Возобновление проигрывания
player.play();

// Получение данных плеера
playbackStats = player.getPlaybackStats();
```

Список остальных функций можете посмотреть на [вики](#).
