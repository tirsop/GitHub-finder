import { useState } from "react"

export default function UserSearch() {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      alert('Please enter something')
    } else {
      // @todo - search results
      setText('')
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <button className="btn btn-ghost btn-lg">Clear</button>
      </div>
    </div>
  )
}