# Summary

1. Client Side Rendered HTML
    1. **Slower** First Contentful Paint.
        1. The `/` page will be blank for 1.1 min for slow 3G user (400 kbps).
    2. Not SEO friendly. Crawler see a blank page.

2. Server Side Rendered HTML
    1. **Faster** First Contentful Paint.
    2. Although FCP is faster, the page is not interactable (except navigating).
        1. Slow 3G user (400 kbps) takes 16.47 before `Hero Search` is responsive.
    3. User can navigate to `/detail/13` immediately.
    4. SEO friendly. Crawler see `<a href="/detail/13">` and other tags.

![Client Side Rendering](./README/Angular%20Universal-Client%20Side%20Rendering.drawio.png)

![Server Side Rendering](./README/Angular%20Universal-Server%20Side%20Rendering.drawio.png)

# Dynamic Rendering

Only send server side rendered HTML if the User Agent is Googlebot.

1. https://blog.adnanebrahimi.com/how-to-switch-between-angular-ssr-or-csr-based-on-detecting-user-agent

![Dynamic Rendering](./README/Angular%20Universal-Dynamic%20Rendering.drawio.png)