---
title: Happy Work 테마
date: 2023-08-04
author: zombieJ
---

<!-- Release = 릴리스 (한국어 내에서 발음 그대로 음차하여 사용하는 경우가 더 많다고 판단됨) -->

지난 v5 릴리스 발표에서, 우리 디자인 팀은 happy work 테마를 제공할 것이라고 언급했습니다. 여전히 이 작업은 진행 중입니다, 그러나 몇몇 작업에서 진전을 보였기에 여러분과 이를 공유하고자 합니다.

## TL;DR

<!-- 실제로는 Theme Effect (테마라고 번역하는 것이 더 와닿을 것이라고 생각하여 이렇게 번역함) -->

이제 `@ant-design/happy-work-theme`를 통해 happy work 테마로 전환할 수 있습니다 (더 궁굼한 사항이 있다면 계속해서 읽어주세요):

```tsx
import { HappyProvider } from '@ant-design/happy-work-theme';

export default () => (
  <HappyProvider>
    <Button />
  </HappyProvider>
);
```

![Happy Work 테마](https://github.com/react-component/picker/assets/5378891/3c54ef05-5448-4619-b492-b5328c032c52)

<!-- Customize를 어떻게 번역할 것인가 (사용자 정의? 커스텀? ) -->

## 커스텀 Wave 효과

<!-- 클릭 Wave ? Click Wave 효과 ??? 하나의 고유 명사? 같은 거라고 생각해서 Click Wave로 번역함 -->
<!-- 또한 아래와 같이 다양한 컴포넌트에서 .. 라는 표현은 없으나 실제 의미를 더욱 강조하기 위해서 해당 표현을 사용하였음 -->

Ant Design의 몇몇 컴포넌트에는 Click Wave 효과라는 특별한 상호작용 효과가 존재합니다. 이는 아래처럼 다양한 컴포넌트에서 찾을 수 있습니다:

- <img alt="Button" height="110" src="https://github.com/react-component/picker/assets/5378891/60aaad50-cfd5-4c1f-b91f-0be217877f3f" />
- <img alt="Checkbox" height="70" src="https://github.com/react-component/picker/assets/5378891/f7d64d64-29db-4c9c-a0d6-de8b36a31d48" />
- <img alt="Radio" height="70" src="https://github.com/react-component/picker/assets/5378891/9f4edaa8-26f7-468c-bcf3-1ce80163bf0e" />
- <img alt="Switch" height="84" src="https://github.com/react-component/picker/assets/5378891/16abcee6-32d0-4075-bc4c-440d8aade067" />

지난 메이저 버전에서는 이 Wave 효과를 마음대로 수정할 수 없었습니다. 만약 이 효과를 끄고 싶다면, 개발자들은 이를 위한 "마법의 코드"가 필요했었죠. 이 때문에 디자인 팀은 happy work 테마를 제안했고, 개발자로서 우리는 변화를 불러올 적절한 시기라고 생각했습니다.

### Wave 컴포넌트

<!-- 실제 문장의 구조와는 다르지만, 이해의 편의성과 문맥을 살리기 위하여 문장의 구조를 조금 다르게 번역하였음. -->

Wave 효과는 실제 컴포넌트에 해당합니다, 자식 컴포넌트로부터 클릭 이벤트를 수신하고 `box-shadow` 애니메이션 효과를 추가하여 Wave 효과를 만들어냅니다:

```tsx
// Sample code.
const Button = (
  <Wave>
    <button />
  </Wave>
);
```

<!-- Design Token (전체 디자인을 변수를 통해 관리하는 존재), 여기에 추가적으로 타입을 추가하면 유지보수/확장이 어려워진다 -->
<!-- 표현을 완전히 바꿔서 의역하였음, 의도가 Design Token으로 관리할 수 있도록 하였는데 이 때문에 오히려 복잡해져서 PR이 Draft된 경우인듯 -->
<!-- 이해를 위해서 문장을 더욱 구체적으로 변경하였고, 문장의 구조를 변경하였음. -->
<!-- wave customization ability를 wave 컴포넌트가 가진 유연성으로 번역하는 것이 옳은걸까? 이를 통해 의미가 더 와닿을 수 있을까? -->

초기에 Wave 컴포넌트를 설계할 때 ([#40111](https://github.com/ant-design/ant-design/pull/40111)), Wave 컴포넌트의 유연성을 Design Token을 통해 관리하길 원했습니다. 그러나 이 방식은 기존의 `string | number` 타입을 `string | number | Function<T>` 로 변경하면서 Design Token을 더 복잡하게 만들 것이 분명했습니다. API 설계 관점에서 본다면 `Function<T>` 는 유지 보수를 어렵게 만듭니다, 또한 커스텀에 대한 새로운 요청사항이 발생한다면 함수의 유형이 다앙해지며 컴포넌트가 더더욱 복잡해질 것입니다. 이런 다양한 이유들로 인해 PR [#40111](https://github.com/ant-design/ant-design/pull/40111)은 여전히 초안에 머물러있습니다.

### ConfigProvider

<!-- 표현을 너무 축약했다고 생각해서, 문장을 추가적으로 넣었다. -->

다음으로, 우리는 이를 ConfigProvider에 추가하기로 했습니다. ConfigProvider는 글로벌 설정 컴포넌트로 모든 자식 컴포넌트에 영향을 끼칠 수 있고, API를 통해 많은 컴포넌트를 설정할 수 있습니다. 따라서 우리는 `wave` 속성만을 추가하면 되었기 때문에 ConfigProvider에 이를 추가하였습니다:

```tsx
<ConfigProvider wave={{ showEffect }}>
  <Button />
</ConfigProvider>
```

![커스텀 Wave Effect](https://github.com/react-component/picker/assets/5378891/425094d8-8767-4a53-85fb-5b13b888f2c4)

[ConfigProvider 예제 확인](/components/config-provider#config-provider-demo-wave)

`showEffect` 메소드는 효과를 생성해야 하는 올바른 DOM 노드를 알려줍니다. 해당 메소드는 내부에 캡슐화되어 항상 다음과 같은 올바른 노드에 대응하도록 만들어졌습니다 (예시 : Button, Radio의 각 Label에 있는 원형 DOM 노드). 또한 이 메소드는 어느 컴포넌트인지, 그리고 해당 컴포넌트가 어떤 Design Token에 속한지 알려줍니다.

```tsx
type ShowEffect = (target: HTMLElement, info: { component: string; token: GlobalToken }) => void;
```

디자인 토큰을 통해, 현재 테마에 따라서 변화하는 유연한 효과를 구현할 수 있습니다. 예를 들어 글 초반에 있는 GIF의 테마 색상이 변경될 경우, 해당 테마 색상을 가져온 뒤 기존의 효과에 적용하여 유연하게 변화도록 만들 수 있습니다.

## 마지막으로!

Happy Work 테마는 여전히 작업 중에 있으며, 우린 점진적으로 최종 버전에 더 많은 기능을 추가할 계획입니다. 또한 현재 `@ant-design/happy-work-theme`에 의해 제공되는 HappyProvider가 ConfigProvider를 통해 기존의 Wave 효과를 대체하고 있고, 향후 개발자들의 추가적인 수정이 없어도 편리하게 사용할 수 있도록, 버전을 거듭하며 점진적으로 더 많은 "행복"을 추가할 예정입니다. 그럼 읽어주셔서 감사하고 계속해서 지켜봐 주세요!
