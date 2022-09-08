const getElement = () => ({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  
  export default getElement
  