/**
 * @jest-environment jsdom
 */
const {setUpForm} = require("../src/form")

beforeEach(() => {
    document.body.innerHTML =
    `<form action="/submit" method="post">
        <input type="text" id="name"/>
        <button type="submit"> submit</button>
    </form>
    <p id="output"></p>` ;

})

test('Form exists', () => {
    const form = document.querySelector("form")
    expect(form).not.toBeNull();
    expect(form.getAttribute('method')).toBe('post')
})

test('shows error when input is empty', () => {
    setUpForm(document)
    const form = document.querySelector("form")
    const input = document.querySelector("input")
    input.value = "Alice"
    form.dispatchEvent(new Event("submit"))
    const output = document.querySelector("p")
    expect(output.textContent).toBe("Hello Alice")
})

