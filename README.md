# login page

Just a login page on React. You can find out my front-end skills here. 🙂

Key points:

1. [Dummy BE](https://github.com/umyar/be-autocomplete/blob/master/src/routes/login.ts) is also implemented by me. Just checking a couple of hardcoded email-password pairs.
2. This app is just a login page. In root. No any other pages.
3. Work is still [in progress](https://github.com/umyar/login/tree/master?tab=readme-ov-file#todo). Ideal state is not achievable...
4. I've created a separate [section with UI elements](https://github.com/umyar/login/tree/master/src/ui) (good step towards the separate ui-package).

<br>
Valid credentials:

| Email          | Password         |
| -------------- | ---------------- |
| mail@mail.mail | iuliia_bomb!     |
| box@box.box    | in_god_we_trust? |

<br>

<a href="https://login-three-drab.vercel.app/" style="padding:10px 15px; background-color:green; color:white; border:none; border-radius:5px; text-decoration:none;">
  go to login page
</a>

## TODO:

Quite a lot is not done yet... 😨

- [ ] Responsive layout + mobile devices test (WIP)
- [ ] Dark theme handling
- [ ] Test in the different browsers (not Chrome only...)
- [ ] a11y test: VoiceOver, TalkBack, NVDA
- [ ] Required inputs improvement (`required` attr -> `aria-required`)
- [x] Feedback component implementation (server response)
- [x] Correct error messages handling (server response)
- [ ] Decent disabled state for buttons and inputs...
- [ ] Flexbox stuff from style to CSS (`justify-content,` `align-items`...)
- [ ] Animations for the buttons loading state
- [ ] Password visibility toggle button upgrade (inside the input & shown only when needed)
- [ ] LinkButton component needed (for `I forgot my password 😓` and `Sign up`)
- [ ] I want some flat and cozy background for the Login form
- [ ] Some fancy libs for CSS (but I'm ok with pure CSS so far 😎)
- [ ] Components rendering optimizations
- [ ] UI section clean-up
  - [ ] three-shaking
  - [ ] separate chunk
  - [ ] CSS unification
- [ ] Sentry setup
