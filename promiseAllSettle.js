function task(name, time, fail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fail) {
        reject(`${name} failed`)
      } else {
        resolve(`${name} completed`)
      }
    }, time)
  })
}

async function runTasks() {
  console.log('Begin...\n')

  const results = await Promise.allSettled([
    task('Upload document', 1000),
    task('Save bd', 1500, true),
    task('Send a message', 800),
    task('generate report', 1200, true)
  ])

  console.log('Results:\n')

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Task ${index + 1}:`, result.value)
    } else {
      console.error(`Task ${index + 1}:`, result.reason)
    }
  })

}

runTasks()
