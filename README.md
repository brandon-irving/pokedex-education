## Project PokeDex

Welcome to the project! This guide is designed to help junior developers navigate the codebase, understand how to add routes, query data, and style components.

Here are the [designs](https://www.figma.com/design/WGzJL08MfwYkCHnroEUQiU/Pok%C3%A9dex-%28Community%29?node-id=1021-1175&node-type=frame&t=H8DB11VhBeyfmX1c-0)


## Table of Contents

1. [Project Structure](#project-structure)

2. [How to Add Routes](#how-to-add-routes)

3. [How to Query Data](#how-to-query-data)

4. [Styling Components](#styling-components)

5. [Common Practices](#common-practices)

6. [Additional Resources](#additional-resources)

---

## Project Structure

src/

├── api/

│ ├── index.ts

│ └── types.ts

├── components/

│ └── ui/

│ └── page.tsx

├── pages/

│ └── test/

│ └── index.tsx

├── router.tsx

- **src/api/**: Contains API calls and related types.

- **src/components/**: Reusable UI components.

- **src/pages/**: Page components that correspond to routes.

- **src/router.tsx**: Defines the application's routing logic.

---

## How to Add Routes

We use a file-based routing system. Each file inside `src/pages/` represents a route in the application.

### Steps to Add a New Route

1.  **Create a New Page Component**:

Create a new folder inside `src/pages/` with the name of your route.

```bash
mkdir src/pages/new-route
```

2.  **Add an index.tsx File:**:

Inside your new folder, create an index.tsx file.

```bash
touch src/pages/new-route/index.tsx
```

3.  **Add an index.tsx File:**:
    Define Your Component:

```javascript
// src/pages/new-route/index.tsx

import Page from 'src/components/ui/page'

export default function NewRoute() {
  return (
    <Page>
      <h1>New Route</h1>

      <p>Welcome to the new route!</p>
    </Page>
  )
}
```

3.  **Add an index.tsx File:**:

Define Your Component:

```javascript
// src/pages/new-route/index.tsx

import Page from 'src/components/ui/page'

export default function NewRoute() {
  return (
    <Page>
      <h1>New Route</h1>

      <p>Welcome to the new route!</p>
    </Page>
  )
}
```

4.  **Update router:**:

```javascript

// src/router.tsx
import { createBrowserRouter, RouteObject } from  'react-router-dom'

import  ErrorPage  from  './components/error-page'

import { getDefaultLayout } from  './components/layout'

import  HomePage  from  './pages/home'

import  Test  from  './pages/test'



export  const  routerObjects:  RouteObject[] = [

{

path:  '/',

Component:  HomePage,

},

{

path:  '/newRoute',

Component:  NewRouteComponent,

},

]



export  function  createRouter():  ReturnType<typeof  createBrowserRouter> {

const  routeWrappers  =  routerObjects.map((router) => {

// @ts-ignore TODO: better type support

const  getLayout  =  router.Component?.getLayout  ||  getDefaultLayout

const  Component  =  router.Component!

const  page  =  getLayout(<Component  />)

return {

...router,

element:  page,

Component:  null,

ErrorBoundary:  ErrorPage,

}

})

return  createBrowserRouter(routeWrappers)

}
```

```javascript
// src/pages/new-route/index.tsx

import Page from 'src/components/ui/page'

export default function NewRoute() {
  return (
    <Page>
      <h1>New Route</h1>

      <p>Welcome to the new route!</p>
    </Page>
  )
}
```

## How to Add Routes

We use `@tanstack/react-query` for data fetching and state management.

```javascript
// How to query data

// src/pages/test/index.tsx

import { useQuery } from '@tanstack/react-query'

import { getPokemon } from 'src/api'

import Page from 'src/components/ui/page'

export default function Test() {
  const query = useQuery(['pokemon'], () => getPokemon('ditto'))

  if (query.isLoading) {
    return <div>Loading...</div>
  }

  if (query.error || !query.data) {
    return <div>Pokemon doesn't exist</div>
  }

  return (
    <Page>
      <h1>{query.data.name}</h1>

      <img src={query.data.sprites.front_default} alt={query.data.name} />
    </Page>
  )
}
```

## Common Practices

- **Consistent Naming**: Use descriptive and consistent names for files and functions.
- **Code Organization**: Keep related code together, and separate concerns appropriately.
- **Error Handling**: Always handle loading and error states when fetching data.
- **Reusability**: Create reusable components to reduce duplication.
