# Promisses Async Await

![Promisses vs Async Await](promissesImage.png)

## What is promisses?
execute command asynchronously

```javascript
async function searchData() {
  try {
    const response = await fetch('/api')
    const data = await res.json()
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

```

Promises have 3 states:
- Pending: when the operation is not yet complete
- Fulfilled: when the operation finished successfully and returned a value
- Rejected: when the operation failed and returned an error

<img width="755" height="291" alt="Screenshot 2026-02-03 at 19 48 03" src="https://github.com/user-attachments/assets/5336bf2a-7bdb-49c1-8972-858a00122327" />

### PromisseAll
- It is a method that receives multiple Promises and returns a single Promise
- only resolves when ALL Promises resolve

## Promise.allSettled()
- It receives an array of Promises and waits for all of them to complete, regardless of success or failure.
- return all promisses
