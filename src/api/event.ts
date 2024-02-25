const eventApi = () => {
  function getEventCount(stringValue: string){
    const value = () => stringValue.length
    return setTimeout(value,20000)
  }
  return {getEventCount}
}
export default eventApi