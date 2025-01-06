import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Content'
import Search from './Search'
import Filter from './Filter'
import Modal from './Modal'


function App() {
  const [content, setContent] = useState([])
  const [fetchError, setFetchError] = useState(null)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

useEffect(()=> {

  const fetchData = async ()=> {
    try {
      const response = await fetch('data/data.json')
      if (!response.ok) throw Error("Please, Reload the page.")
      const result = await response.json()
      setContent(result)
      setFetchError(null)
    } catch (err) {
      setFetchError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  fetchData()

}, [])


  return (
    <main className='app'>
      <Header/>
      { showModal && <Modal 
        setShowModal={setShowModal}
        modalData={modalData}
        content={content}
      />}
      <main className='main-content'>
        <div className="inputs">
          <Search
            search={search}
            setSearch={setSearch}
          />
          <Filter
            setFilter={setFilter} 
          />
        </div>
        {isLoading && <p className='loading'>Loading Data ....</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        { !fetchError && !isLoading && <Content 
          setShowModal={setShowModal}
          setModalData={setModalData}
          content={content.filter(item=> (item.name).toLowerCase().includes(search.toLocaleLowerCase())
             && item.region.includes(filter) )}
        />}
      </main>
    </main>
  )
}

export default App
