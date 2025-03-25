# Improvisational UI space

So. Here is just a list of the ui components which will be extended with time.

In terms of the content. For now here is just a necessary stuff for a login page. 😊

## Box

This is kinda `div` wrapper for a form controls. Only `slotName` and `gap` props are interesting here.
`slotName` - basically just a grid-area value. `gap` - just a gap fro flexbox.

## Button

Common button. You can click it and see loading state. `secondary` and `primary` variants are okeish so far.

## LinkButton

WIP still. Was intended for the "forgot password" action.

## Feedback

Component for a user feedback indication. RN using it only for the error messages from the server.

## Input

This one is smart enough already. Has many props. `helperText` the most interesting one I'd say.
I use it for a error messages (or some tips, just put your tip there).

## LoginFormLayout

It is a grid layout for login form. UI is not an appropriate place for storing it. 🤔
I will move it somewhere else.
