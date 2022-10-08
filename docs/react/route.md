# 路由


## 第一层路由


app.js 中
```jsx

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./routes/Login/Login";
import Register from "./routes/Register/Register";
import Index from "./routes/Index/Index";
import NoPage from "./routes/NoPage/NoPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/admin">
          <Index />
        </Route>
        <Route path="/">
          <NoPage />
        </Route>
      </Switch>
    </Router>
  );
}
```

无匹配到的就用`path="/"`

## 子层路由

```jsx

import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

export default function SiderDemo() {

  let match = useRouteMatch();

  return (
    <div>
      <ul>
        <li icon={<HomeOutlined />}>
          <Link to={`${match.url}/home`}>首页</Link>
        </li>
        <li icon={<CloudOutlined />}>
          <Link to={`${match.url}/easy-mock`}>easyMock</Link>
        </li>
        <li icon={<UserOutlined />}>
          <Link to={`${match.url}/user`}>个人中心</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${match.path}/`}>
          <Home />
        </Route>
        <Route path={`${match.path}/home`}>
          <Home />
        </Route>
        <Route path={`${match.path}/user`}>
          <User />
        </Route>
        <Route path={`${match.path}/easy-mock`}>
          <Home />
        </Route>
        <Route path={`${match.path}/*`}>
          <NoPage />
        </Route>
      </Switch>
    </div>

  )
}

```

          



## 最新文档地址

https://reactrouter.com/web/example/custom-link