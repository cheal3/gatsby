## gatsby js  공부
-----------

#### 왜 gatsby js 인가?
원래는 react만으로 개발을 한다고 인턴 기간동안 react를 공부시켰는데 개발기간이 약 3주밖에 되지 않아서 리액트를 기반으로 해서 더 빠르게 웹 페이지를 생성할 수 있는 gatsby 로 진행한다고만 알려주셨다. 

찾아보니 gatsby와 함께 비교당하는 친구는 Next.js라는 녀석이었다. `Gatsby`는 **정적 웹사이트  생성도구** 이고  `Next.js`는 **서버사이드 렌더링**을 하기 위한 도구이다 쉽게 말하면 Gatsby는 빌드시 순수한 HTML/CSS/JS 를 뱉어내고 Next는 서버에서 새로운 Request를 받을때 마다 동적으로 뱉어내는 것이라고 알고 있으면 되겠다. 
인턴 기간동안 할 껌딱지 프로젝트에서는 쇼핑몰을 만들것이기 때문에 추가 사이트나 컨텐츠의 추가가 비교적 적기 때문에 정적인 생성도구인 Gatsby를 채택한 것이 아닐까 추측해본다. 그래서 공부도 할 겸 gatsby로 이것 저것 만들어 보기로 하였다

### 20/10/22
=======


gatsby , redux , hooks 를 혼합해서 사용해야 하는데 블로그들에는 전부 완성된 코드를 올려놓고 설명식으로 하다보니 시작을 어떻게해서 어떤 방식으로 그 결과까지 도달했는지 알기 어려웠다. 그래서 가장 기초적인 기능들만 구현하면서 생각의 흐름을 정리해 보려고 한다. 
기존 방식대로 구현한 코드를 master 브랜치에 , ducks패턴으로 구현한 코드를 ducks 브랜치에 푸쉬하려했는데 생각보다 어렵다


![](https://images.velog.io/images/cheal3/post/de6a0a3d-b8f2-4ae9-a1bc-259277ed6225/image.png)


성공





### 20/10/23
웹 공부할때 counter 와 함께 꼭 나오는 todoList를 구현해 볼 예정이다.
![](https://images.velog.io/images/cheal3/post/a2fecc7e-1455-469f-ac46-43fdb379d65c/image.png)

 useState로 작성했다가  다른 페이지로 이동했을 때 할 일이 사라지는게 맘에 안들어서 redux를 사용해서 store의 state에 저장하는 방식으로 구현하였다.
 이제 삭제 기능만 구현하면 되겠다.
 
 *삭제기능 ) 해당 아이템 클릭시 dispatch 함수가 실행되게 연결하려 했더니 map에 묶여있는 element 의 스코프 때문에 밖에있는 함수로 빼기도 애매한 상황. 그렇다고 자체적으로 실행하자니 자꾸 render되는 현상때문에 이러지도 못하고 2시간째 고민중....* 
 
 onClick 이벤트시 deleteValue(element)처럼 데이터를 함께 보내게 되면 렌더링이 엄청나게 많이 발생해서 에러가 발생한다. 그래서 파라미터를 전달하는 방식은 포기하고 어떻게 할까 고민하다가 그냥 html태그를 string 으로 변환해서 정규표현식으로 원소의 값만 빼내는 방식을 채택하였다.
 
 => 이벤트 버블링 공부 
 
 
 
![](https://images.velog.io/images/cheal3/post/e4896ec1-aefe-467e-99f5-d0beeb378dcc/image.png)




![](https://images.velog.io/images/cheal3/post/ec0e7eef-48b2-4f7d-9226-3156dc2201e9/image.png)


결과는 정상적으로 잘 작동한다.  merge를 잘못헀더니 readme가 날라가서 다시 작성...
